<template>
    <div class="product_detail">
      <div class="detailWrap">
        {{ msg }}
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
        <p>{{ msg }}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'product_detail',
  data () {
    return {
      msg: 'product_detail.vue'
    }
  },
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
    background-color: #f1f1f3;
  }
  .detailWrap {
    width: 1100px;
    margin: 0 auto;
  }
</style>
