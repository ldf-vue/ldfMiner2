// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import Headnav from './components/Headnav'
import Myfooter from './components/Myfooter'
import './assets/css/base.css'
import './assets/js/lan-packs.js'

Vue.use(VueRouter)
// 实例化VueRouter
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Headnav, Myfooter }
})
