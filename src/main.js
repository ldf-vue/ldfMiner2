// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import Headnav from './components/Headnav'
import Myfooter from './components/Myfooter'
import ElementUI from 'element-ui'
import './assets/css/base.css'
import 'element-ui/lib/theme-default/index.css'
import './assets/js/lan-packs.js'
import './vuex.js'
import vueResource from 'vue-resource'

Vue.use(ElementUI)
Vue.use(vueResource)
Vue.http.options.emulateJSON = true
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
