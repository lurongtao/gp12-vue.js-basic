// Vue.filter('g', (value) => {
//   return value === 0 ? '男' : '女' 
// })

var vm = new Vue({
  el: '#root',
  
  data: {
    name: 'junhao',
    gender: 0
  },

  filters: {
    g(value, prefix) {
      return (value === 0 ? '男' : '女') + prefix
    }
  },

  computed: {
    // hangender() {
    //   return this.gender === 0 ? '男' : '女' 
    // }
  },
})