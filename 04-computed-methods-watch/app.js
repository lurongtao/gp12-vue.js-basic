var vm = new Vue({
  el: '#root',

  data: {
    title: '标题一',
    content: 'hello world.',
    // title4: 'original title4',
    firstName: 'wen',
    lastName: 'junhao',
    title5: ''
  },

  computed: {
    // 计算属性是基于它们的响应式依赖进行缓存的
    title2() {
      // console.log('title2')
      return this.title + '/' + '让读书成为习惯'
    },
    title4() {
      setTimeout(() => {
        return this.title + 'updated title4'
      }, 5000)
      return 'title4'
    },
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },

  methods: {
    title3() {
      // console.log('title3')
      // this.sayContent()
      // this.foo()
      this.$options.foo.call(this)
    },

    sayContent() {
      // console.log('content')
    }
  },

  watch: {
    title(value) {
      setTimeout(() => {
        this.title5 = value
      }, 5000)
    }
  },

  foo() {
    // console.log(this)
    // console.log('this is a foo function.')
  }
})