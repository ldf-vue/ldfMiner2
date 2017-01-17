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
    <div v-if='parameter'>
      <h4 class="parameter">规格参数</h4>
      <table class="details_table">
      	<tr v-for="detail in details">
          <td class="detail_td td_name">{{detail.name}}</td>
          <td class="detail_td td_data">{{detail.data}}</td>
        </tr>
      </table>
    </div>
    <img v-for='detailImage in detailImages' :src='detailImage.image' />
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
        {url: 'static/img/mainGW1.webp'},
        {url: 'static/img/mainGW3.webp'},
        {url: 'static/img/mainGW4.webp'},
        {url: 'static/img/mainGW2.webp'}
      ],
      detailText: {
        name: '长城电源巨龙1250W',
        // hot为产品名后的‘热门’icon，boolean类型值，true为显示icon，false不显示
        hot: true,
        ifo: '80PLUS金牌,全模组/全电网宽幅设计,14厘米智能温控风扇,电力缓存系统',
        prices: [
          {
            name: '1250W',
            rmb: '950.00'
          }
        ],
        // 购买数量 默认为1
        productNum: 1
      },
      parameter: false,
      details: [ ],
      detailImages: [
        {image: 'static/img/detailGW1.jpg'},
        {image: 'static/img/detailGW2.jpg'},
        {image: 'static/img/detailGW3.jpg'},
        {image: 'static/img/detailGW4.jpg'},
        {image: 'static/img/detailGW5.jpg'},
        {image: 'static/img/detailGW6.jpg'},
        {image: 'static/img/detailGW7.jpg'},
        {image: 'static/img/detailGW8.jpg'},
        {image: 'static/img/detailGW9.jpg'},
        {image: 'static/img/detailGW10.jpg'},
        {image: 'static/img/detailGW11.jpg'},
        {image: 'static/img/detailGW12.jpg'}
      ],
      service_date: '1080'
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
	margin: 40px 0 50px
}
.details_table {
  margin: 0 auto
}
.details_ifo img {
	display: block;
	margin: 0 auto
}
/*规格参数*/
.parameter {
  text-align: center;
  font-size: 26px;
  margin-bottom: 15px 
}
/*表格*/
.detail_td {
  padding: 13px 25px;
  text-align: center;
  border: 1px solid #e5e5e5;
  margin-left: -1px
}
.td_name {
  width: 150px;
}
.td_data {
  width: 650px;
}
</style>
