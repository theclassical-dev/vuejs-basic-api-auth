import axios from 'axios'

export default {
    namespaced: true,

    state: {
        test: [],
    },
    getters:{
        allTest (state){
           return state.test
        }
    },
    actions: {
        async fetchTest({ commit }){
            const response = await axios.get('v1/test');
      
            commit('setTest', response.data);
          }
    },
    mutations: {

        setTest(state, data){
            state.test = data
        } 
    },

}