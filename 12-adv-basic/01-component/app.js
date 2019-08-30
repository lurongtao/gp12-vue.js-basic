import Child from './Child.js'

var vm = new Vue({
  el: '#root',
  data: {
    hello: 'hi',
    obj: {
      a: 0,
      b: 1,
      c: 2
    }
  },
  components: {
    ChildComponent: Child
  }
})