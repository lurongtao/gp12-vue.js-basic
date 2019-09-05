const products = {
  namespaced: true,
  
  state: {
    all: []
  },

  mutations: {
    setProduct(state, data) {
      state.all = data
    },

    increment(state) {
      console.log(1)
    }
  }, 

  actions: {
    setProduct({commit}) {
      setTimeout(() => {
        commit('setProduct', ['apple touche', 'iphone'])
      }, 2000)
    }
  }
}

export default products