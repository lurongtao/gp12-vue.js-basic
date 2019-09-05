<template>
  <div>
    {{$store.state.count}} {{myvar}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    // ...mapGetters({
    //   myvar(state) {
    //     return this.$store.getters.myvar(9)
    //   }
    // })
    myvar() {
      return this.$store.getters.myvar(9)
    }
  },
}
</script>