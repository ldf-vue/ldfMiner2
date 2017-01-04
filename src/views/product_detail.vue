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
        {url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png'},
        {url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png'},
        {url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png'},
        {url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png'},
        {url: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png'}
      ],
      detailText: {
        name: 'PandaMiner B1 Plus',
        hot: false,
        ifo: '最新PandaMiner B1 Plus矿机所采用核心GPU为RX480，更高算力更低功耗！',
        price: '15,500.00',
        price_bitcoin: '2.051'
      }
    }
  },
  components: { left, right }
}
</script>

<style scoped>
  .product_detail {
    background-color: #f1f1f3;
  }
  .detailWrap {
    width: 1100px;
    height: 578px;
    margin: 0 auto;
  }
</style>
