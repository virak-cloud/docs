// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './styles/style.css'
import './styles/custom.css'

import DarkModeImage from './components/DarkModeImages.vue'
import Remark42Comments from './components/Remark42Comments.vue'

import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.component('DarkModeImage', DarkModeImage)
    app.component('CommentBox', Remark42Comments)

  }
} satisfies Theme
