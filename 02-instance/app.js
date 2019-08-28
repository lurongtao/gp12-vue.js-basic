var vm = new Vue({
  el: '#root',
  data: {
    title: '标题'
  },
  mounted() {
    console.log(this.$el)
  }
})

// var vm2 = new Vue({
//   el: '#app',
//   data: {
//     title: '标题二'
//   }
// })