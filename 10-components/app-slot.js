Vue.component('child', {
  template: `
    <div>
      child component
      <slot></slot>
      <slot name="div3"></slot>
    </div>
  `
})

var vm = new Vue({
  el: '#root',
  data: {

  }
})