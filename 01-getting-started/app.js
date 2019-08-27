const data = {
  username: '',
  message: '上海自来水来自海上',
  fruits: [
    '🍎',
    '🍌',
    '🍇'
  ],
  products: []
}

Vue.component('gp12', {
  template: `
    <ul>
      <li v-for="f in fruits">{{f}}</li>
    </ul>
  `,
  data() {
    return {
      fruits: [
        '🍎',
        '🍌',
        '🍇'
      ],
    }
  }
})

var vm = new Vue({
  el: '#root',

  data,

  methods: {
    reverse() {
      this.message = this.message.split('').reverse().join('')
    },

    // handleInput(e) {
    //   this.username = e.target.value
    // }
  },

  mounted () {
    // this.products.push({
    //   name: 'iphone',
    //   price: 100,
    //   inventory: 9
    // })

    fetch('https://api.myjson.com/bins/7i3ev')
      .then(response => response.json())
      .then(result => {
        this.products = result.data
      })
  },

  computed: {
    total () {
      return this.products.reduce((sum, value) => {
        return sum + value.price * value.quantity
      }, 0)
    }
  }
})