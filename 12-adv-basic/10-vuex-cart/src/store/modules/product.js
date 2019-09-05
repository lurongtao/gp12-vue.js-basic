import { SETDATA, CHANGEINVENTORY } from '../types/mutation-types'
import { LOADDATA } from '../types/action-types'

export default {
  state: {
    all: []
  },

  mutations: {
    [SETDATA](state, data) {
      state.all = data
    },

    [CHANGEINVENTORY](state, id) {
      let product = state.all.find((value) => {
        return value.id === id
      })
      product.inventory--
    }
  },

  actions: {
    [LOADDATA]({commit}) {
      fetch('/data')
        .then(response => response.json())
        .then(result => {
          commit(SETDATA, result)
        })
    }
  }
}