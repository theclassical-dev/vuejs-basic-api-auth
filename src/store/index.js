import { createStore } from 'vuex'
import auth from './auth'
import main from './main'
export default createStore({
  state: {
    //
  },
  getters: {
   //
  },
  mutations: {
    //
  },
  actions: {
  //  
  },
  modules: {
    auth,
    main
  }
})
