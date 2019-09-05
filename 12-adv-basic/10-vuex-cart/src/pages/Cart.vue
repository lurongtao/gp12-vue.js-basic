<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.name}} / {{item.price}} x {{item.quantity}} = {{item.price * item.quantity}}
      </li>
    </ul>
    <div>总价：{{totalPrice}} 元</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import { TOTALPRICE } from '../store/types/getter-types'
export default {
  computed: {
    ...mapState({
      items: state => state.cart.items
    }),
    totalPrice() {
      return this.$store.getters[TOTALPRICE]
    }
  },
}
</script>