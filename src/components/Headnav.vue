<template>
  <div class="Headnav">
    <div class="navWrap">
      <!-- 此处跳转，之前是用了a标签的href属性，发现打包后出现了问题，不能正常跳转，所以换为router-link -->
      <router-link :to="{ path: 'home' }">
        <img src="../assets/logo.png" class="logoImg">
      </router-link>
      <ul>
        <li v-for="item in items" class="navItem">
          <router-link :to="{ name: item.href}" :class="{'on':item.href==curHref}">
            <!-- <a>{{item.name}</a> -->
            <a>{{ $t('nav['+item.number+'].name') }}</a>
          </router-link>
        </li>
      </ul>
      <Switchlan></Switchlan>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Switchlan from './Switchlan'
import Login from './Login'

export default {
  name: 'Headnav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {name: '首页', class: 'icon-zhuye', href: 'home', number: 0},
        {name: '矿机', class: 'icon-kefu', href: 'product_list', number: 1},
        {name: '配置说明', class: 'icon-jilu', href: 'config_info', number: 2},
        // {name: '新闻', class: 'icon-zhangdan1', href: 'news'},
        {name: '关于', class: 'icon-zhangdan1', href: 'about', number: 3},
        {name: 'FAQ', class: 'icon-zhangdan1', href: 'the_faq', number: 4}
      ],
      curHref: 'home',
      number: 0
    }
  },
  watch: {
    '$route': 'routeChange'
  },
  methods: {
    routeChange () {
      this.curHref = this.$route.name
      if (this.curHref === 'product_detail') {
        this.curHref = 'product_list'
      }
      document.body.scrollTop = 0
    }
  },
  components: { Switchlan, Login }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Headnav {
    height: 100px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #f9f9fa;
    height: 100px;
    position: relative;
    z-index: 1;
  }
  .navWrap {
    width: 1100px;
    margin: 0 auto;
    height: 100%;
    position: relative;
  }

  .navWrap a {

  }
  .logoImg {
    width: 215px;
    height: 100px;
   
  }
  .navWrap ul {
    position: absolute;
    top: 0;
    left: 250px;
  }
  .navWrap .navItem {
    float: left;
  }
  .navItem a {
    display: block;
    font-size: 16px;
    padding: 0 22px;
    line-height: 100px;
    height: 100px;
    color: #333;
  }
  .navItem .on a {
    color: #32c057;
  }
</style>
