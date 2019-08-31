// Vue.directive('myfocus', {
//   inserted(el) {
//     el.focus()
//   }
// })

var vm = new Vue({
  el: '#root',
  
  data: {
    name: 'junhao',
    gender: 0
  },

  directives: {
    myfont(el, binding) {
      console.log(binding)
      switch(binding.arg) {
        case 'fontsize':
          el.style.fontSize = Object.keys(binding.modifiers)[0]
        case 'color':
          el.style.color = Object.keys(binding.modifiers)[0]
      }
    }
  }

  // mounted() {
  //   this.$refs.inpt.focus()
  // }
})