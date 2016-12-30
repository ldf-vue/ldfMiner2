<template>
  <div class="Headnav">
		<div class="navWrap">
      <a href="/#/home">
        <img src="../assets/logo.png" class="logoImg">
      </a>
      <ul>
        <li v-for="item in items" class="navItem">
          <router-link :to="{ name: item.href}" :class="{'on':item.href==curHref}">
            <a>{{item.name}}</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headnav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: [
        {name: '首页', class: 'icon-zhuye', href: 'home'},
        {name: '矿机', class: 'icon-kefu', href: 'product_list'},
        {name: '配置说明', class: 'icon-jilu', href: 'config_info'},
        {name: '新闻', class: 'icon-zhangdan1', href: 'news'},
        {name: '关于', class: 'icon-zhangdan1', href: 'about'},
        {name: 'FAQ', class: 'icon-zhangdan1', href: 'the_faq'}
      ],
      curHref: 'home'
    }
  },
  watch: {
    '$route': 'routeChange'
  },
  methods: {
    routeChange () {
      this.curHref = this.$route.name
    }
  }
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
