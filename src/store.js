//import Vue from 'vue'
//import Vuex from 'vuex'

import { createStore } from 'vuex'
 //要用vuex4的语法
 
// 创建 store 容器实例.
const store = createStore({
  state:{
    navShow:true,
  },
  getters: {},
  mutations: {
    changeNav(){
      var noo=!(store.state.navShow);
        store.state.navShow=noo;
    }
  },
})


//Vue.use(Vuex);
/*
const module = {
    state:{
        navShow:true,
    },
    getters: {},
    mutations: {
        changeNav(){
            alert(store.state.navShow);
            store.state.navShow=!store.state.navShow;
            alert(store.state.navShow);
        }
    },
    
}
const store = new Vuex.Store(module)*/
export default store
/*
export default new Vuex.Store({
  state: {
    navShow:true,
  },
 
  actions: {
 
  }
})
*/