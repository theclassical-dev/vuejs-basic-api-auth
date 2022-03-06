import { createStore } from 'vuex'
import auth from './auth'
import axios from 'axios'
export default createStore({
  state: {
    test: []
  },
  getters: {
    allTest: state => state.test
  },
  mutations: {
    setTest: (state, test) =>(state.test = test)
  },
  actions: {
    async fetchTest({ commit }){
      const response = await axios.get('v1/test');

      commit('setTest', response.data);
    }
  },
  modules: {
    auth
  }
})
