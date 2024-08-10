import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme as ThemeConfig } from 'vitepress'
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import "./style.css"
// import './styles/vars.css'
// import './styles/main.css'

export const Theme: ThemeConfig = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // A enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
    })
  },
  enhanceApp() {
    // other configurations...
  },
}

export default Theme