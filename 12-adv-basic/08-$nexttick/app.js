var vm = new Vue({
  el: '#root',
  
  data: {
    title: 'next tick'
  },

  mounted() {
    // 修改是异步的
    this.title = 'new tick'

    this.$nextTick(() => {
      console.log(document.getElementById('root').innerHTML)
    })
    
    // setTimeout(() => {
    //   console.log(document.getElementById('root').innerHTML)
    // }, 0)
  },
})