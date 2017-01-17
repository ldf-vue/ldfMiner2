<template>
  <div class="Login">
    <div class="account_login">
      <a href="javascript:void(0)" class="btn" id="regist_btn" @click="registerBox = true">{{ $t("login.register") }}</a>
        <el-dialog title='注册' v-model='registerBox'>
          <el-form :model='registerData'>
            <el-form-item label='用户名' :label-width='formLabelWidth'>
              <el-input v-model="registerData.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label='密码' :label-width='formLabelWidth'>
              <el-input v-model="registerData.password" auto-complete="off" type='password'></el-input>
            </el-form-item>
            <el-form-item label='确认密码' :label-width='formLabelWidth'>
              <el-input v-model="registerData.passwordRepeat" auto-complete="off" type='password'></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="registerBox = false">取 消</el-button>
            <el-button type="primary" @click="register">注 册</el-button>
          </div>
        </el-dialog>
      <a href="javascript:void(0)" class="btn" id="login_btn">{{ $t("login.login") }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Login.vue',
      registerBox: false,
      registerData: {
        name: '',
        password: '',
        passwordRepeat: ''
      },
      formLabelWidth: '80px'
    }
  },
  methods: {
    register: function () {
      console.log(1)
      var that = this.registerData
      console.log(that.name)
      this.$http({
        url: 'http://www.yuxiulive.com/app1/reg',
        body: {
          name: that.name,
          password: that.password,
          passwordRepeat: that.passwordRepeat
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        console.log(response)
      }).then(function (response) {
        console.log(response)
      })
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
