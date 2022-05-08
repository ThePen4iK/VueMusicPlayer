import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuth: false
  },
  mutations: {
    setAuth(state, payload){
      state.isAuth = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
