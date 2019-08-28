var vm = new Vue({
  el: '#root',
  data: {
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
    movies: {
      title: '肖申克的救赎',
      year: 1996,
      rating: 9.8
    },
  },

  methods: {
    handleClick() {
      // this.tabs.splice(0, 1, {
      //   title: 'home',
      //   content: 'home content'
      // })
      // this.$set(this.tabs, 0, {
      //   title: 'index',
      //   content: 'index content'
      // })
      this.tabs.splice(0, this.tabs.length)
    }
  },

  computed: {
    filterTabs() {
      return this.tabs.filter((value, index) => {
        return index % 2 === 0
      })
    }
  },
})