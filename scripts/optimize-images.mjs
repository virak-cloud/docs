#!/usr/bin/env node
/**
 * Converts jpg/jpeg/png images to .webp using sharp, preserving original dimensions,
 * and updates any Markdown references to the converted files' new .webp extension.
 *
 * Usage:
 *   node scripts/optimize-images.mjs <input-dir> [options]
 *
 * Options:
 *   --max-width=<n>       Resize images wider than <n>px. Disabled by default
 *                         (original dimensions are always preserved unless you pass this).
 *   --quality=<n>         Use lossy webp at quality <n> instead of lossless (default: lossless).
 *   --delete-original     Delete the original jpg/png after a successful, smaller conversion.
 *                         Default: keep both files.
 *   --update-refs=<dir>   After conversion, scan all .md files under <dir> and replace
 *                         references to converted images' old extension with .webp.
 *                         Only takes effect when combined with --delete-original, since
 *                         it assumes the old file no longer exists.
 *
 * Example:
 *   node scripts/optimize-images.mjs docs/public/images/guides/en/dark/database \
 *     --delete-original --update-refs=docs
 *
 * Requires: npm install --save-dev sharp
 */

import { readdir, stat, unlink, writeFile, readFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const args = process.argv.slice(2)
const inputDir = args.find((a) => !a.startsWith('--'))
const maxWidthArg = args.find((a) => a.startsWith('--max-width='))
const qualityArg = args.find((a) => a.startsWith('--quality='))
const updateRefsArg = args.find((a) => a.startsWith('--update-refs='))
const deleteOriginal = args.includes('--delete-original')

const MAX_WIDTH = maxWidthArg ? parseInt(maxWidthArg.split('=')[1], 10) : null
const QUALITY = qualityArg ? parseInt(qualityArg.split('=')[1], 10) : null
const LOSSLESS = QUALITY === null
const UPDATE_REFS_DIR = updateRefsArg ? updateRefsArg.split('=')[1] : null
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])

if (!inputDir) {
  console.error('Error: please provide an input directory.')
  console.error(
    'Usage: node scripts/optimize-images.mjs <input-dir> [--max-width=<n>] [--quality=<n>] [--delete-original] [--update-refs=<dir>]'
  )
  process.exit(1)
}

if (UPDATE_REFS_DIR && !deleteOriginal) {
  console.warn(
    'Warning: --update-refs is normally used together with --delete-original. ' +
      'Without it, Markdown files will point to .webp while the old .png/.jpg still exists too — harmless, but usually not what you want.'
  )
}

async function walk(dir, predicate) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath, predicate)))
    } else if (predicate(entry.name)) {
      files.push(fullPath)
    }
  }
  return files
}

// Converts an absolute/relative filesystem path under a `public` directory
// into the web-facing path used in Markdown (e.g. "/images/guides/en/.../x.png").
function toWebPath(filePath) {
  const parts = path.resolve(filePath).split(path.sep)
  const publicIndex = parts.lastIndexOf('public')
  if (publicIndex === -1) return null
  return '/' + parts.slice(publicIndex + 1).join('/')
}

async function convertOne(filePath) {
  const parsed = path.parse(filePath)
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`)
  const before = (await stat(filePath)).size

  const image = sharp(filePath)
  let pipeline = image

  if (MAX_WIDTH) {
    const metadata = await image.metadata()
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH })
    }
  }

  const webpOptions = LOSSLESS ? { lossless: true } : { quality: QUALITY }
  const buffer = await pipeline.webp(webpOptions).toBuffer()

  if (buffer.length >= before) {
    console.log(
      `${path.relative(process.cwd(), filePath)} -> skipped ` +
        `(original ${(before / 1024).toFixed(0)}KB is already smaller than webp ${(buffer.length / 1024).toFixed(0)}KB)`
    )
    return null
  }

  await writeFile(outputPath, buffer)

  const oldWebPath = toWebPath(filePath)
  const newWebPath = toWebPath(outputPath)

  if (deleteOriginal) {
    await unlink(filePath)
  }

  const savedPct = (((before - buffer.length) / before) * 100).toFixed(1)
  console.log(
    `${path.relative(process.cwd(), filePath)} -> ${path.relative(process.cwd(), outputPath)} ` +
      `(${(before / 1024).toFixed(0)}KB -> ${(buffer.length / 1024).toFixed(0)}KB, -${savedPct}%, ${LOSSLESS ? 'lossless' : `quality=${QUALITY}`})`
  )

  if (deleteOriginal && oldWebPath && newWebPath) {
    return { oldWebPath, newWebPath }
  }
  return null
}

async function updateMarkdownReferences(mdRoot, conversions) {
  if (conversions.length === 0) return

  const mdFiles = await walk(mdRoot, (name) => name.endsWith('.md'))
  let totalReplacements = 0
  let filesTouched = 0

  for (const mdFile of mdFiles) {
    let content = await readFile(mdFile, 'utf8')
    let fileChanged = false

    for (const { oldWebPath, newWebPath } of conversions) {
      if (content.includes(oldWebPath)) {
        content = content.split(oldWebPath).join(newWebPath)
        fileChanged = true
        totalReplacements++
      }
    }

    if (fileChanged) {
      await writeFile(mdFile, content, 'utf8')
      filesTouched++
      console.log(
        `Updated references in ${path.relative(process.cwd(), mdFile)}`
      )
    }
  }

  console.log(
    `\nReference update: ${totalReplacements} replacement(s) across ${filesTouched} file(s).`
  )
}

async function main() {
  const files = await walk(inputDir, (name) =>
    IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase())
  )
  if (files.length === 0) {
    console.log('No jpg/jpeg/png files found.')
    return
  }

  console.log(
    `Found ${files.length} image(s). Converting to webp ` +
      `(resize=${MAX_WIDTH ? `max-width=${MAX_WIDTH}` : 'disabled, original size kept'}, ` +
      `mode=${LOSSLESS ? 'lossless' : `quality=${QUALITY}`})...\n`
  )

  const conversions = []
  for (const file of files) {
    try {
      const result = await convertOne(file)
      if (result) conversions.push(result)
    } catch (err) {
      console.error(`Failed to convert ${file}:`, err.message)
    }
  }

  console.log('\nConversion done.')

  if (UPDATE_REFS_DIR) {
    console.log(
      `\nScanning "${UPDATE_REFS_DIR}" for Markdown references to update...`
    )
    await updateMarkdownReferences(UPDATE_REFS_DIR, conversions)
  }
}

main()
