import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import counter from './counter'
import products from './products'

const store = new Vuex.Store({
  modules: {
    counter,
    products
  },

  mutations: {
    increment() {
      console.log(0)
    }
  }
})

export default store