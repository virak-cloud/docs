<!-- .vitepress/theme/Layout.vue -->
<script setup lang="ts">
  import { computed } from 'vue'
  import NotFound from './components/404.vue'
  import { useData, useRoute } from 'vitepress'
  import DefaultTheme from 'vitepress/theme'
  import { ref, nextTick, provide, onMounted, watch } from 'vue'
  import mediumZoom from 'medium-zoom'

  const { isDark } = useData()
  const contentLoaded = ref(false)
  const route = useRoute()
  const weAreInHome = computed(() => {
    return ['/fa/guides/', '/en/guides/'].includes(route.path)
  })
  const applyZoom = () => {
    mediumZoom('[data-zoomable]', {
      background: 'rgba(0,0,0, 0.8)',
      margin: 20
    })
  }

  onMounted(async () => {
    applyZoom()
    await nextTick()
    contentLoaded.value = true
  })

  watch([() => isDark.value, () => route.path], () => {
    nextTick(() => {
      applyZoom()
    })
  })

  const showComment = ref(true)
  watch(
    () => route.path,
    async () => {
      showComment.value = false
      await nextTick()
      showComment.value = true
    }
  )

  const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

  provide('toggle-appearance', ({ clientX, clientY }: MouseEvent) => {
    if (!enableTransitions()) {
      isDark.value = !isDark.value
      return
    }

    const x = (100 * clientX) / innerWidth
    const y = (100 * clientY) / innerHeight

    const maxRadius =
      (100 *
        Math.hypot(
          Math.max(clientX, innerWidth - clientX),
          Math.max(clientY, innerHeight - clientY)
        )) /
      (Math.hypot(innerWidth, innerHeight) / Math.SQRT2)

    const root = document.documentElement
    root.style.setProperty('--switch-x', `${x}%`)
    root.style.setProperty('--switch-y', `${y}%`)
    root.style.setProperty('--switch-r', `${maxRadius}%`)

    document.startViewTransition(async () => {
      isDark.value = !isDark.value
      await nextTick()
    })
  })
</script>

<template>
  <DefaultTheme.Layout>
    <template #not-found>
      <not-found />
    </template>
  </DefaultTheme.Layout>
  <Teleport
    v-if="contentLoaded && !weAreInHome"
    to="#VPContent .content-container"
    defer
  >
    <CommentBox v-if="showComment" />
  </Teleport>
</template>

<style>
  #remark42 {
    margin-top: 30px;
  }

  .root__copyright {
    display: none;
  }

  /* ============= Transition dark/light Mode ============= */
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }

  ::view-transition-new(root) {
    animation: switch-appearance 300ms ease-in;
  }

  .dark::view-transition-new(root) {
    animation: none;
  }

  .dark::view-transition-old(root) {
    animation: switch-appearance 300ms ease-in reverse forwards;
    z-index: 1;
  }

  @keyframes switch-appearance {
    from {
      clip-path: circle(0 at var(--switch-x) var(--switch-y));
    }
    to {
      clip-path: circle(var(--switch-r) at var(--switch-x) var(--switch-y));
    }
  }

  .VPSwitchAppearance {
    width: 22px !important;
  }

  :where([dir='ltr']) {
    .VPSwitchAppearance {
      margin-left: 0.5rem;
    }
  }

  .VPSwitchAppearance .check {
    transform: none !important;
  }
</style>
