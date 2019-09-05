import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import product from './modules/product'
import cart from './modules/cart'

const store = new Vuex.Store({
  modules: {
    product,
    cart
  }
})

export default store