import Vue from 'vue'
import * as GmapVue from 'gmap-vue'
import App from './App.vue'
import About from './About.vue'

Vue.config.productionTip = false

const API_KEY = 'AIzaSyDDU-VlqEjlvWebkT9CzsftBlgPgyNw3Zs'

Vue.use(GmapVue, {
  load: {
    key: API_KEY,
  },
  installComponents: true,
})

const routes = {
  '/': App,
  '/about': About,
}

new Vue({
  // render: h => h(App),
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    viewComponent() {
      return routes[this.currentRoute] || routes['/']
    },
  },
  render(h) {
    return h(this.viewComponent)
  },
}).$mount('#app')
