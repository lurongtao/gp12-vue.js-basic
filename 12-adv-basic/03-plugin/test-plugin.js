const MyPlugin = {}

import Gp12 from './Gp12.js'

MyPlugin.install = function(Vue, options={name: 'junhao'}) {
  Vue.gp12 = '千锋好程序员12班'
  Vue.sayName = () => {
    console.log(Vue.gp12)
  }

  Vue.directive('gp12', (el, binding) => {
    console.log(el)
  })

  Vue.mixin({
    components: {
      Gp12
    }
  })

  Vue.prototype.$sayName = () => {
    console.log('gp12 plugins')
  }
}

export default MyPlugin