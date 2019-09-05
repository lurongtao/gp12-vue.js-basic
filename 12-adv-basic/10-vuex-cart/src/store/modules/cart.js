import { ADD as ADDMUTATION, CHANGEINVENTORY } from '../types/mutation-types'
import { ADD as ADDACTION } from '../types/action-types'
import { TOTALPRICE } from '../types/getter-types'
export default {
  state: {
    items: []
  },

  mutations: {
    [ADDMUTATION](state, product) {
      let { id, name, price } = product
      let item = state.items.find((value, index) => {
        return value.id === id
      })
      
      if (item) {
        item.quantity++
      } else {
        state.items.push({
          id,
          name,
          price,
          quantity: 1
        })
      }
    }
  },

  actions: {
    [ADDACTION]({commit}, p) {
      commit(ADDMUTATION, p)
      commit(CHANGEINVENTORY, p.id)
    }
  },

  getters: {
    [TOTALPRICE](state, getters) {
      return state.items.reduce((total, item) => {
        return total += item.price * item.quantity
      }, 0)
    }
  }
}