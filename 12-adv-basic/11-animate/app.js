var vm = new Vue({
  el: '#root',
  
  data: {
    isShow: true
  },

  methods: {
    handleClick() {
      this.isShow = !this.isShow
    }
  },
})