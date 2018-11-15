// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import setting from './setting'
import store from './store'
import App from './App'
import "@/assets/js/jquery-1.9.1.js"

import "@/assets/css/commen.css"
import "@/assets/css/markdown.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
