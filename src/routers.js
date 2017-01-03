import Home from './views/home.vue'

const routers = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/product_list',
  name: 'product_list',
  component (resolve) {
    require.ensure(['./views/product_list.vue'], () => { resolve(require('./views/product_list.vue')) })
  }
}, {
  path: '/product_detail',
  name: 'product_detail',
  component (resolve) {
    require.ensure(['./views/product_detail.vue'], () => { resolve(require('./views/product_detail.vue')) })
  }
}, {
  path: '/config_info',
  name: 'config_info',
  component (resolve) {
    require.ensure(['./views/config_info.vue'], () => { resolve(require('./views/config_info.vue')) })
  }
}, {
  path: '/news',
  name: 'news',
  component (resolve) {
    require.ensure(['./views/news.vue'], () => { resolve(require('./views/news.vue')) })
  }
}, {
  path: '/about',
  name: 'about',
  component (resolve) {
    require.ensure(['./views/about.vue'], () => { resolve(require('./views/about.vue')) })
  }
}, {
  path: '/the_faq',
  name: 'the_faq',
  component (resolve) {
    require.ensure(['./views/the_faq.vue'], () => { resolve(require('./views/the_faq.vue')) })
  }
}, {
  path: '*',
  component: Home
}]

export default routers
