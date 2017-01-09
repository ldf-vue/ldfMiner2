<template>
    <div class="product_detail">
      <div class="detailWrap">
      	<!-- 左侧产品图展示模块 detail-pics用于传递数据 -->
				<left :detail-pics='detailPics'></left>
				<!-- 右侧信息展示模块 detail-text.sync双向绑定数据 -->
				<right :detail-text.sync='detailText'></right>
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
        {url: '../../static/img/kj1.jpg'},
        {url: '../../static/img/kj2.jpg'},
        {url: '../../static/img/kj3.jpg'},
        {url: '../../static/img/kj4.jpg'},
        {url: '../../static/img/kj5.jpg'}
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
      }
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
  }
  .detailWrap {
    width: 1100px;
    height: 578px;
    margin: 0 auto;
  }
</style>
