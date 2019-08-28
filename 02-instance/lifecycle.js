var vm = new Vue({
  data: {
    title: '标题一'
  },

  beforeCreate() {
    console.log('beforeCreate')
    console.log(this.title)
    console.log(document.getElementById('root').innerHTML)
  },

  created() {
    console.log('created')
    this.title = '标题零'
    console.log(document.getElementById('root').innerHTML)
  },

  beforeMount() {
    console.log('beforeMount')
    this.title = '标题二'
    console.log(document.getElementById('root').innerHTML)
  },

  mounted() {
    console.log('mounted')
    console.log(this.title)
    console.log(document.getElementById('root').innerHTML)
    setTimeout(() => {
      this.title = '标题三'
    }, 3000)
    setTimeout(() => {
      this.title = '标题四'
    }, 5000)
  },

  beforeUpdate() {
    console.log('beforeUpdate')
  },

  updated() {
    console.log('updated')
  },

  beforeDestroy() {
    console.log('beforeDestroy')
  },

  destroyed() {
    console.log('destroyed')
  },
})

vm.$mount(document.getElementById('root'))