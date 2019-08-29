Vue.component('fruit', {
  props: ['fruit'],
  template: `
    <tr>{{fruit}}</tr>
  `
})

var vm = new Vue({
  el: '#root',
  data: {
    list: ['🍎', '🍇', '🍉']
  }
})