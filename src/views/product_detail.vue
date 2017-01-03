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
