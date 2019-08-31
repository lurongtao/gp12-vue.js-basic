export default {
  data: {
    age: 18,
    name: 'lice'
  },
  methods: {
    showName() {
      console.log(this.name)
    }
  },
  mounted() {
    console.log('mixin mounted.')
  },
}