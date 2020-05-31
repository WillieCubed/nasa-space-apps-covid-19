import Vue from 'vue'
import App from './App.vue'
import About from './About.vue'

Vue.config.productionTip = false

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
