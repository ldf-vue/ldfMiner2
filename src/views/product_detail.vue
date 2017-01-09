<template>
    <div class="product_detail">
      <div class="detailWrap">
				<left :detail-pics='detailPics'></left>
				<right :detail-text='detailText'></right>
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
      msg: 'product_detail.vue',
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
        hot: false,
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
        ]
      }
    }
  },
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
