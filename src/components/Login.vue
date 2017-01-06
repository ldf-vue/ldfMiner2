<template>
  <div class="Login">
    <div class="account_login">
      <a href="javascript:void(0)" class="btn" id="regist_btn">{{ $t("login.register") }}</a>
      <a href="javascript:void(0)" class="btn" id="login_btn">{{ $t("login.login") }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login.vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Login {
    position: absolute;
    right: 0;
    top: 32px;
  }
  .Login .btn {
    box-sizing: border-box;
    display: inline-block;
    padding: 0 10px;
    font-size: 16px;
    border-radius: 4px;
    text-align: center;
    width: 85px;
    height: 36px;
    line-height: 36px;
    float: left;
    margin-left: 10px;
  }
  #regist_btn {
    background-color: #fff;
    border: 1px solid #32c057;
    color: #32c057;
  }
  #login_btn {
    background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
  }
</style>
