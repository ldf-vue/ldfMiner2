# test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

#ldfMIner文档

> ldfMIner 网站一些笔记和说明

该网站是基于 vueCli 的 webpack 模板创建的VUE组件化单页面

##起步：
1、使用 vue-cli 创建项目模板
```
vue init webpack ldfMiner
```
2、创建成功后，cd ldfMIner 命令行运行 
```
npm isntall 和 npm run dev 
```
执行成功后，浏览器自动打开 http://localhost:8080/，并且支持热更新。

##目录结构:
<pre>
    ├── README.md 
    ├── build               // 项目 webpack 配置目录
    ├── config               // 项目 config 目录
    ├── dist               // 项目 npm run build 后产生的目录
    ├── index.html         // 项目入口文件
    ├── package.json       // 项目配置文件
    ├── src                // 生产目录
    │   ├── assets         // css js 和图片资源
    │   ├── components     // 组件，创建组件时需注意组件的命名格式
    │   ├── views          //router 渲染的页面组件
    │   ├── App.vue        // 顶层组件（但在该项目，初期不熟悉，把该顶层组件删除了，组件直接写在 index.html里面了，影响还未发现）
    │   └── main.js        // Webpack 预编译入口
    │   └── vuex.js        // vuex 配置，状态管理
    │   └── router.js      // router 配置文件
    ├── static             // 不需要 webpack 打包的静态资源，可以用来放置绝对路径的文件
</pre>

##重要知识点说明:
1、router 的配置
router的配置是在 router.js 中配置，官方文档：https://router.vuejs.org/zh-cn/

**需注意在组件中需要跳往不同的路由时：使用 router-link 标签，不要使用 a 标签，否则打包时会遇到一些跳转的问题

**router-link 标签：
<router-link> 比起写死的 a 标签会好一些，理由如下：
a. 无论是 HTML5 history 模式还是 hash 模式，它的表现行为一致，所以，当你要切换路由模式，或者在 IE9 降级使用 hash 模式，无须作任何变动。
b. 在 HTML5 history 模式下，router-link 会拦截点击事件，让浏览器不在重新加载页面。
c. 当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。

**router-link 标签的 name 和 path ：
当 router 没有参数时，即：/product_list 或 /config_info, 使用name
当 router 有参数时，即：/product_detail/:id 使用 path

2、国际化 i18n
使用了别人写的一个插件，文档地址：https://kazupon.github.io/vue-i18n/
**安装：npm install vue-i18n --save

**用法如下：
在 ./assets/js 文件夹创建 lan-packs.js 
```
var Vue = require('vue')
var VueI18n = require('vue-i18n')

// ready translated locales 需要中英切换的语言放在 locals 变量中
var locales = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}

// install plugin
Vue.use(VueI18n)


// set lang 设置默认语言，使用 localStorage 保存选择的语言，刷新后还是所选择的语言
Vue.config.lang = window.localStorage.getItem('lan') || 'ja'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})
```

再在 main.js 中 import './assets/js/lan-packs.js' 即可
调用：
```
<p>{{ $t("message.hello") }}</p>

//输出：
<p>こんにちは、世界</p>
```
切换语言时：
```
Vue.config.lang = 'en'
window.localStorage.setItem('lan', type)
```

**需要注意：导航栏的几个导航是使用 v-for 来生成的，需要做一些特别处理
```
<li v-for="item in items" class="navItem">
  <router-link :to="{ name: item.href}" :class="{'on':item.href==curHref}">
    <a>{{ $t('nav['+item.number+'].name') }}</a>
  </router-link>
</li>
//在 item 里面增加了个索引值，lan-packs.js 中则需这样写
nav: [
      {name: '首页'},
      {name: '矿机'},
      {name: '配置说明'},
      {name: '关于'},
      {name: 'FAQ'}
    ]
```

**后来改善地方：
之前所有的语言切换都放在 lan-packs.js 文件的 locals 变量中，如果需要大量切换语言，则使得该文件很难维护，可读性差，且会出现多人共同更改该文件的可能性

**所以后来把 lan-packs.js 扩展了，把每个组件的语言包单独抽离出来在 js文件中，如 faq-package.js 和 home-package.js
```
//在 lan-packs.js 中导出 locals 变量，以方便扩展语言包
export { locales }
```

在 faq-package.js 中：
```
//导入 locals 变量
import { locales } from './lan-packs.js'

locales.en.faq = {
  payment: 'Payment'
}
locales.cn.faq = {
  payment: '支付问题'
}

//在 faq 组件中调用
import '../assets/js/faq-package.js'

<h3>{{ $t("faq.payment") }}</h3>
```

3、使用 vuex 状态管理
该网站目前使用 vuex 主要是在语言切换时需记录状态，即是为 en 或 cn
该网站头部和尾部都能进行语言切换，所以需要同步两个的状态，则引入 vuex, 文档地址：https://vuex.vuejs.org/zh-cn/

**创建 vuex.js 
```
import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lan: window.localStorage.getItem('lan') || 'cn'
  },
  mutations: {
    increment (state, type) {
      state.lan = type
      window.localStorage.setItem('lan', type)
    }
  }
})

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store

```

在 Switchlan.vue 组件中取得 lan 属性：
```
store.state.lan  //获取
store.commit('increment', type)   //改变
```

4、npm run build 打包后的一些注意事项
如果是本地打开，打包前需要更改 build/webpack.base.conf.js 文件中的 output.publicPath 为 './'

本地资源的绝对路径问题：js html css 中的路径都不太一样

js: 如果是 js 中配置图片路径，即路径是字符串，是不经过 webpack 打包的途径，即都是在 ./static 文件夹下的文件

html: 这里的图片路径经过 webpack 打包，没有什么问题

css: 这里有问题，background-image 图片背景问题，打包出来后 static/img 文件夹下面有该文件，但就是找不到，需要更改路径为 '../../static' 才能找到图片（这个问题还未解决，猜测可能是把 vue 文件的 css 样式抽离出来了）

#### vue-resource数据绑定问题

vue-resource默认数据格式存在问题，建议在main.js中设置全局属性：

```
Vue.http.options.emulateJSON = true
```

#### Element-ui问题

element-ui下拉菜单选项回调需使用command，不能使用click，并且需要在头部dropdown说明：@command=‘handleCommand’（详细参见文档）

**home.vue 中的 background 图片背景问题


目前解决方法：
修改 webpack.prod.confic 文件 vue.extract = false 即可，即不再把 vue 文件的 css 样式抽离出来了

页面暂缺：
确认订单
支付订单
订单管理
收货地址
消息通知
账号管理

功能暂缺：
注销登录
登录模块左上角下拉菜单
订单提交
商品数量判断
立即购买登录态判断

