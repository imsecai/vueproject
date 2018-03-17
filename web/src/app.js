import '../src/common/common.css' 

import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import VueResource from 'vue-resource'

Vue.use(VueResource)

import '../node_modules/font-awesome/css/font-awesome.min.css';
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})