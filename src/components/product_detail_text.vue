<template>
<div class="right">
	<p class="product_name">
	  {{detailText.name}}
	  <span class="product_hot" v-show='detailText.hot'>热门</span>
	</p>
	<p class="product_ifo">
	  {{detailText.ifo}}
	</p>
	<p class="product_price">
	  价格：
	  <span class="price_rmb">¥{{detailText.price}}</span>
	  <span class="price_bitcoin">( {{detailText.price_bitcoin}} BTC )</span>
	</p>
</div>
</template>

<script>
export default {
  name: 'right',
  data () {
    return {

    }
  },
  props: ['detailText']
}
</script>

<style>
.right {
	height: 388px;
	width: 570px;
	float: right;
}
.product_name {
	font-size: 32px;
  color: #333;
  margin-bottom: 10px
}
.product_ifo {
	font-size: 16px;
  color: #666;
  margin-top: 15px;
}
.product_price {
	background-color: #f1f1f3;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  margin: 30px 0 40px;
}
.price_rmb,.price_bitcoin {
	vertical-align: top;
}
.price_rmb {
	font-size: 26px;
}
.price_bitcoin {
	font-size: 14px;
  color: #999;
}
</style>