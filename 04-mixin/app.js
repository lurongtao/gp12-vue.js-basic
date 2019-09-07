// import mixin from './mixin.js'

Vue.mixin({
  mounted() {
    console.log('global mixin')
  }
})

var vm = new Vue({
  el: '#root',
  
  data: {
    name: 'junhao'
  },

  // mixins: [mixin],

  methods: {
    handleClick() {
      this.showName()
    },

    // showName() {
    //   console.log(this.age)
    // }
  },

  mounted() {
    // console.log(0)
  }
})