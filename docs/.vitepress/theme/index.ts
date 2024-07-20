// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Layout from './layout.vue'

import './overrides.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Layout)
  },
}
