import { DECREMENT } from './mutation-types.js'
const counter = {
  namespaced: true,
  
  state: {
    count: 100
  },

  mutations: {
    // increment(state, payload) {
    //   setTimeout(() => {
    //     state.count += payload || 1
    //   }, 1000)
    // },
    increment(state) {
      state.count += 1
    },

    [DECREMENT](state, payload) {
      state.count -= payload || 1
    }
  },

  actions: {
    asyncIncrement({commit}) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  },

  getters: {
    myvar(state) {
      return (payload) => {
        return '￥' + state.count + payload
      }
    },
    myfoo(state, getters) {
      getters.myvar
    }
  }
}

export default counter