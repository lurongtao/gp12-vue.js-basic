<template>
  <div>
    <ul>
      <li v-for="p in products" :key="p.id">
        {{p.name}} / {{p.price | cap}} 
        <button 
          @click="addProductToCart(p)"
          :disabled="p.inventory === 0"
        >放入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { LOADDATA } from '../store/types/action-types'
import { ADD } from '../store/types/mutation-types'
import { mapState } from 'vuex'
export default {
  beforeCreate() {
    this.$store.dispatch(LOADDATA)
  },

  computed: {
    ...mapState({
      products: state => state.product.all
    })
  },

  filters: {
    cap(value) {
      return '￥' + value
    }
  },

  methods: {
    addProductToCart(p) {
      this.$store.dispatch(ADD, p)
    }
  },
}
</script>