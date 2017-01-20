<template>
  <div class="Login">
    <div class="account_login" v-if="loginBtn">
      <!-- ======================注册======================== -->
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
      <!-- =====================登录========================= -->
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
    <div class="user_ifo" v-if="userIfo">
      <el-dropdown trigger="click" @command='handleCommand'>
        <span class="el-dropdown-link">
          {{userData.name}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>订单查询</el-dropdown-item>
          <el-dropdown-item>系统通知</el-dropdown-item>
          <el-dropdown-item>资料修改</el-dropdown-item>
          <el-dropdown-item command='logout'>退 出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
      loading: false,
      loginBtn: false,
      userIfo: false
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
                url: 'http://www.lingyun.party/app1/reg',
                body: {
                  name: that.name,
                  password: that.password,
                  passwordRepeat: that.passwordRepeat
                },
                method: 'POST'
              }).then(function (response) {
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
      // 登录
      if (that.name) {
        if (that.password) {
          this.$http({
            url: 'http://www.lingyun.party/app1/login',
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
              this.loginBtn = false
              this.userIfo = true
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
    },
    // 个人下拉菜单选中项
    handleCommand (command) {
      if (command === 'logout') {
        // 注销登录
        this.$http.get(
          'http://www.lingyun.party/app1/logout'
        ).then(function (response) {
          this.$notify({
            title: '注销成功',
            message: '您的登录信息已成功注销！',
            type: 'success'
          })
          this.loginBtn = true
          this.userIfo = false
          this.userData.name = ''
        }, function (response) { })
      }
    }
  },
  // 登录态确认
  created: function () {
    this.$http.get(
      'http://www.lingyun.party/app1/checkLogin'
    ).then(function (response) {
      if (response.body.code === 1) {
        this.userData.name = response.body.name
        this.loginBtn = false
        this.userIfo = true
      } else {
        this.loginBtn = true
      }
    }, function () {
      this.loginBtn = true
    })
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
  .user_ifo {
    padding: 10px 10px 0 0
  }
</style>
