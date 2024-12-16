// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import './styles/style.css'
import './styles/custom.css'
import DarkModeImage from './components/DarkModeImages.vue'
import Remark42Comments from './components/Remark42Comments.vue'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    googleAnalytics({
      id: 'G-DHGDB9E1G9',
    })
    app.component('DarkModeImage', DarkModeImage)
    app.component('CommentBox', Remark42Comments)

  }
} satisfies Theme
