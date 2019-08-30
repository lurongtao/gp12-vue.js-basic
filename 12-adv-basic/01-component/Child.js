export default {
  props: {
    a: Number,
    title: {
      type: [Number],
      // default: function() {
      //   return [1, 3, 4].filter((value) => {
      //     return value > 2
      //   })
      // },
      validator(value) {
        return value > 100
      }
    }
  },
  template: `
    <div id="9">{{msg}} <button @click="change">click</button></div>
  `,
  data() {
    return {
      msg: 'title',
      title2: ''
    }
  },
  methods: {
    change() {
      this.msg = 'hello'
    }
  },
  mounted() {
    this.title2 = this.title
  }
}