// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Layout from './Layout.vue'

import './vars.css'
import './overrides.css'
import 'uno.css'

export default {
  ...Theme,
  Layout: () => {
    return h(Layout)
  },
}
