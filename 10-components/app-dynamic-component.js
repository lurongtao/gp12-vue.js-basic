const comp1 = Vue.component('comp1', {
  template: `
    <div>component 1</div>
  `
})
const comp2 = Vue.component('comp2', {
  template: `
    <div>component 2</div>
  `
})
const comp3 = Vue.component('comp3', {
  template: `
    <div>component 3</div>
  `
})

var vm = new Vue({
  el: '#root',
  data: {
    comp1,
    comp2,
    comp3,

    currentComp: comp1
  },

  methods: {
    handleClick(comp) {
      this.currentComp = comp
    }
  }
})