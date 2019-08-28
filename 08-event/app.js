var vm = new Vue({
  el: '#root',
  data: {
    name: 'lurongtao'
  },

  methods: {
    handleClick(e, name) {
      this.name = name
      console.log(e)
    },
    handleDivClick() {
      console.log('div has clicked.')
    },
    handleInput(e) {
      console.log(0)
      if (e.keyCode === 13) {
        console.log('enter')
      }
    }
  },

  computed: {
    
  },
})