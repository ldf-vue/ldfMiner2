<template>
  <div class="Login">
    <div class="account_login">
      <a href="javascript:void(0)" class="btn" id="regist_btn" @click="registerBox = true">{{ $t("login.register") }}</a>
        <el-dialog title='注册' v-model='registerBox' size='tiny'>
          <el-form :model='userData'>
            <el-form-item label='用户名' :label-width='formLabelWidth'>
              <el-input v-model="userData.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label='密 码' :label-width='formLabelWidth'>
              <el-input v-model="userData.password" auto-complete="off" type='password'></el-input>
            </el-form-item>
            <el-form-item label='确认密码' :label-width='formLabelWidth'>
              <el-input v-model="userData.passwordRepeat" auto-complete="off" type='password'></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="registerBox = false">取 消</el-button>
            <el-button type="primary" @click="register" :loading="loading">注 册</el-button>
          </div>
        </el-dialog>
      <a href="javascript:void(0)" class="btn" id="login_btn" @click="loginBox = true">{{ $t("login.login") }}</a>
        <el-dialog title='登录' v-model='loginBox' size='tiny'>
          <el-form :model='userData'>
            <el-form-item label='用户名' :label-width='formLabelWidth'>
              <el-input v-model="userData.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label='密 码' :label-width='formLabelWidth'>
              <el-input v-model="userData.password" auto-complete="off" type='password'></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="loginBox = false">取 消</el-button>
            <el-button type="primary" @click="login" :loading="loading">登 陆</el-button>
          </div>
        </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      registerBox: false,
      loginBox: false,
      userData: {
        name: '',
        password: '',
        passwordRepeat: ''
      },
      formLabelWidth: '80px',
      loading: false
    }
  },
  methods: {
    register: function () {
      // 修改按钮状态
      this.loading = true
      var that = this.userData
      // 注册
      if (that.name) {
        if (that.password) {
          if (that.passwordRepeat) {
            if (that.password === that.passwordRepeat) {
              // post请求
              this.$http({
                url: 'http://www.yuxiulive.com/app1/reg',
                body: {
                  name: that.name,
                  password: that.password,
                  passwordRepeat: that.passwordRepeat
                },
                method: 'POST'
              }).then(function (response) {
                console.log(response.data.re)
                if (response.data.code === 1) {
                  this.$notify({
                    title: '注册成功',
                    message: '恭喜，您已注册成功！',
                    type: 'success'
                  })
                  // 初始化数据
                  this.registerBox = false
                  this.loading = false
                  that.name = ''
                  that.password = ''
                  that.passwordRepeat = ''
                } else {
                  this.$message({
                    showClose: true,
                    message: '该用户名已存在！',
                    type: 'warning'
                  })
                  this.loading = false
                }
              }, function (response) {
                this.$notify.error({
                  title: '错误',
                  message: '异常错误导致您未注册成功，请检查网络连接或稍后再试。'
                })
                this.registerBox = false
                this.loading = false
              })
            } else {
              this.$message({
                showClose: true,
                message: '两次密码输入不一致，请核对',
                type: 'warning'
              })
              this.loading = false
            }
          } else {
            this.$message({
              showClose: true,
              message: '请输入确认密码',
              type: 'warning'
            })
            this.loading = false
          }
        } else {
          this.$message({
            showClose: true,
            message: '请输入密码',
            type: 'warning'
          })
          this.loading = false
        }
      } else {
        this.$message({
          showClose: true,
          message: '请输入用户名',
          type: 'warning'
        })
        this.loading = false
      }
    },
    login: function () {
      this.loading = true
      var that = this.userData
      // 注册
      if (that.name) {
        if (that.password) {
          this.$http({
            url: 'http://www.yuxiulive.com/app1/login',
            body: {
              name: that.name,
              password: that.password
            },
            method: 'POST'
          }).then(function (response) {
            if (response.data.code === 1) {
              this.$notify({
                title: '登录成功',
                message: '',
                type: 'success'
              })
              this.loginBox = false
              this.loading = false
              that.name = ''
              that.password = ''
            } else {
              this.$message({
                showClose: true,
                message: '账号或密码错误！',
                type: 'warning'
              })
              this.loading = false
            }
          }, function (response) {
            this.$notify.error({
              title: '错误',
              message: '异常错误导致您未登录成功，请检查网络连接或稍后再试。'
            })
            this.loginBox = false
            this.loading = false
          })
        } else {
          this.$message({
            showClose: true,
            message: '请输入密码',
            type: 'warning'
          })
          this.loading = false
        }
      } else {
        this.$message({
          showClose: true,
          message: '请输入用户名',
          type: 'warning'
        })
        this.loading = false
      }
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
