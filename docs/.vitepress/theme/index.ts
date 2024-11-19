// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
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
  // Layout: () => {
  //   return h(DefaultTheme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  enhanceApp({ app, router, siteData }) {
    // app.config.globalProperties.$paths = {
    //   gifts: 'https://panel.virakcloud.com/accounting/gifts/list'
    // }
    app.component('DarkModeImage', DarkModeImage)
    app.component('CommentBox', Remark42Comments)

  }
} satisfies Theme
