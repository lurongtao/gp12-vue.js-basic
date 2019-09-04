import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  data: {
    message: 'hihi'
  },
  render: h => h(App)
}).$mount('#app')
