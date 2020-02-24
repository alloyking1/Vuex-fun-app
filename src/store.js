// import and vuex
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// create our store
export default new Vuex.Store({
  state:{
    message: "Hello, I am coming from your Vuex state that is why you can see me here and in every other component without passing props"
  },

  mutations:{
    changeMessageValue(state, message){
      state.message = message
    }
  }
})