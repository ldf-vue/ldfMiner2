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

</style>