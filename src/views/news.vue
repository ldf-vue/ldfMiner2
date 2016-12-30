<template>
    <div class="news">
        {{ msg }}
        <div>{{ msg }}</div>
        <div>{{ msg }}</div>
        <div>{{ msg }}</div>
        <div>{{ msg }}</div>
        <div>{{ msg }}</div>
        <div>{{ msg }}</div>
        <div>{{ msg }}</div>
        <div>{{ msg }}</div>
    </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      msg: 'news.vue'
    }
  }
}
</script>

<style scoped>
  .news {
    width: 1100px;
    margin: 0 auto;
  }
</style>
