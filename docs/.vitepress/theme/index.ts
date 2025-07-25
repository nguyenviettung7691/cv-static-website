import DefaultTheme from 'vitepress/theme-without-fonts'
import Layout from './Layout.vue'
import Timeline from './Timeline.vue'
import Grid from './Grid.vue'
import Accordion from './Accordion.vue'
import Cert from './Cert.vue'

export default {
  extends: DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('Timeline', Timeline)
      .component('Grid', Grid)
      .component('Accordion', Accordion)
      .component('Cert', Cert)
  }
}