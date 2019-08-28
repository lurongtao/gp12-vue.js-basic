var vm = new Vue({
  el: '#root',
  data: {
    title: '标题一',
    // content: '<b>hello</b>',
    value: 'yyy',
    attr: 'xxx'
  },

  mounted() {
    var y = 'aaa'
    var x = {
      [y]: '111',
      bbb: '222'
    }
    console.log(x)
  },

  methods: {
    handleClick() {
      this.title = 3
    }
  }
})