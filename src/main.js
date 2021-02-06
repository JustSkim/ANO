import { createApp } from 'vue'
import App from './App.vue'
//import Vue from 'vue'
import router from './routers.js'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

