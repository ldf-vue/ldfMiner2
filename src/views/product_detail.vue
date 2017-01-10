<template>
<div class="product_detail">
	<div class="pageTitle">
		<h2>{{ $t("subTitle.miners") }}</h2>
  </div>
  <div class="detailWrap">
  	<!-- 左侧产品图展示模块 detail-pics用于传递数据 -->
		<left :detail-pics='detailPics'></left>
		<!-- 右侧信息展示模块 detail-text.sync双向绑定数据 -->
		<right :detail-text.sync='detailText'></right>
  </div>
  <div class="details">
  	<span class="details_title">产品详情</span>
  </div>
  <!-- 图文详情图片处理 单个图片自动居中独占一行 -->
  <div class="details_ifo">
  	<img v-for="detail in details" :src="detail">
  </div>
</div>
</template>

<script>
import left from '../components/product_detail_pic.vue'
import right from '../components/product_detail_text.vue'

export default {
  name: 'product_detail',
  data () {
    return {
      detailPics: [
        // 此处把图片存放在static文件夹，需要注意，此处的打包后的路径问题
        {url: 'static/img/kj1.jpg'},
        {url: 'static/img/kj2.jpg'},
        {url: 'static/img/kj3.jpg'},
        {url: 'static/img/kj4.jpg'},
        {url: 'static/img/kj5.jpg'}
      ],
      detailText: {
        name: 'PandaMiner B1 Plus',
        // hot为产品名后的‘热门’icon，boolean类型值，true为显示icon，false不显示
        hot: true,
        ifo: '最新PandaMiner B1 Plus矿机所采用核心GPU为RX480，更高算力更低功耗！',
        prices: [
          {
            name: '矿机+电源',
            rmb: '15,500.00',
            btc: '2.243'
          },
          {
            name: '矿机(无电源)',
            rmb: '15,000.00',
            btc: '2.167'
          }
        ],
        productNum: '1'
      },
      details: [
        'static/img/xq1.jpg',
        'static/img/xq2.jpg',
        'static/logo.png'
      ]
    }
  },
  // 组件注册
  components: { left, right },
  // 响应路由参数的变化
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('路由参数由' + from.params.id + '变为' + to.params.id)
    }
  }
}
</script>

<style scoped>
.product_detail {
  background-color: #ffffff;
  width: 1100px;
  margin: 0 auto;
}
.pageTitle {
  font-size: 26px;
  padding: 25px 0;
}
.detailWrap {
  height: 578px;
  margin-bottom: 50px
}
.details {
	border-bottom: 1px solid #ccc;
  height: 53px;
}
.details_title {
	color: #32c057;
	height: 50px;
  line-height: 50px;
  display: inline-block;
  border-bottom: 3px solid #32c057;
}
.details_ifo {
	margin: 20px 0 30px 0
}
.details_ifo img {
	display: block;
	margin: 0 auto
}
</style>
