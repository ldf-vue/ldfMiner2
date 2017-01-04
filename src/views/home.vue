<template>
    <div class="home">
        <div class="session session1">session1
          <a href="/#/product_detail/id">
            了解更多
          </a>
        </div>
        <div class="session session2">session2</div>
        <div class="session session3">session3</div>
        <div class="session session4">session4</div>
        <div class="session session5">session5</div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'home.vue'
    }
  }
}
</script>

<style type="text/css">
  body {
    font-size: 14px;
    color: #333;
  }
</style>

<style scoped>
  .home {

  }
  .session {
    margin: 0 auto;
  }
  .session1 {
    width: 1100px;
    height: 550px;
    background: yellowgreen;
  }
  .session1 a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .session2 {
    width: 1100px;
    height: 550px;
    background: #8fe2b8;
  }
  .session3 {
    width: 1100px;
    height: 550px;
    background: #de4a4a;
  }
  .session4 {
    width: 1100px;
    height: 550px;
    background: #da7dda;
  }
  .session5 {
    width: 1100px;
    height: 550px;
    background: yellowgreen;
  }
</style>
