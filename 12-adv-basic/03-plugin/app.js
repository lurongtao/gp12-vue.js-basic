import MyPlugin from './test-plugin.js'

Vue.use(MyPlugin)

var vm = new Vue({
  el: '#root',
  methods: {
    showPlugin() {
      console.log(Vue.gp12)
      this.$sayName()
    }
  },
})