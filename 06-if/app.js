var vm = new Vue({
  el: '#root',
  data: {
    message: 'hello',
    info: 'world',
    isShowInfo: false,
    loginType: 'username',
    tabs: [
      {
        title: '首页',
        content: '首页内容'
      },
      {
        title: '搜索',
        content: '搜索内容'
      },
      {
        title: '我的',
        content: '我的内容'
      }
    ],
  },
  methods: {
    handleClick() {
      this.loginType = 'email'
    }
  },
})