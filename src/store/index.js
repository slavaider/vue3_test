import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0
  },
  mutations: {
    increment: (state, payload) => {
      // изменяем состояние
      state.counter += payload
    }
  },
  getters: {
    counter: state => {
      return state.counter
    }
  },
  actions: {
    async Async_increment ({ commit }, payload) {
      setTimeout(() => {
        commit('increment', payload)
      }, 2000)
    }
  },
  modules: {}
})
