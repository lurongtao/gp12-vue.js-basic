<template>
  <div>
    <!-- <button @click="DECREMENT">-</button> 
    {{mycount}} {{myvar}}
    <button
      @click="handleClick"
    >+</button>
    <button
      @click="handlePlusClick"
    >++</button>
    <button @click="handleAsyncIncClick">
      async +
    </button>
    <Cart></Cart> -->

    <div>
      {{counter}}
      <button @click="handleClick">click</button>
    </div>
  </div>
</template>

<script>
import Cart from './components/Cart'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { DECREMENT } from './store/mutation-types.js'
export default {
  components: {
    Cart
  },

  data() {
    return {
      count2: 100
    }
  },

  mounted() {
    // console.log(this)
  },
  
  computed: {
    // ...mapGetters({
    //   myvar() {
    //     return this.$store.getters.myvar(6)
    //   }
    // }),
    // myvar() {
    //   return this.$store.getters.myvar(6)
    // },
    // ...mapState({
    //   mycount (state) {
    //     return state.count
    //   }
    // }),

    counter() {
      return this.$store.state.counter.count
    }
    // myvar() {
    //   return '￥' + this.$store.state.count
    // },
    // myvar() {
    //   return this.$store.getters.myvar
    // }
  },

  methods: {
    // ...mapMutations([DECREMENT]),
    // handleClick() {
    //   // this.$store.commit('increment')
    //   this.$store.state.count++
    // },

    // handlePlusClick() {
    //   this.$store.commit({
    //     type: 'increment',
    //     payload: 5
    //   })
    // },

    // handleMinusClick() {
    //   this.$store.commit(DECREMENT)
    // },

    // handleAsyncIncClick() {
    //   this.$store.dispatch('asyncIncrement')
    // }

    handleClick() {
      this.$store.commit('products/increment')
    }
  },
}
</script>