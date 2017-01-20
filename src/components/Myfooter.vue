<template>
  <div class="Myfooter">
		<div class="footerWrap">
            <Switchlan></Switchlan>
			<!-- <div class="languageSwitch">
        <a class="en">English</a>
          /
        <a class="ch on">中文</a>
      </div> -->
      <div class="linkLists">
        <div class="linkSection">
            <p class="linkTitle">About Us</p>
            <router-link :to="{ name: 'about' }" class="link">{{ $t('nav[3].name') }}</router-link>
            <router-link :to="{ name: 'the_faq' }" class="link">FAQ</router-link>
        </div>
        <div class="linkSection">
            <p class="linkTitle">Policy</p>
            <a href="javascript:void(0)" class="link">使用条款</a>
        </div>
        <div class="linkSection">
            <p class="linkTitle">Explore</p>
            <router-link :to="{ name: 'home' }" class="link">{{ $t('nav[0].name') }}</router-link>
            <router-link :to="{ name: 'product_list' }" class="link">{{ $t('nav[1].name') }}</router-link>
            <router-link :to="{ name: 'config_info' }" class="link">{{ $t('nav[2].name') }}</router-link>
        </div>
        <div class="linkSection linkSection_media">
            <p class="linkTitle">Contact Us</p>
            <a href="https://www.facebook.com/ldf Miner-1029835897114795/" class="link" target="_Blank"><span class="mediaIcon i_media_f"></span>@ldfMiner</a>
            <a href="https://twitter.com/ldfMiner_" class="link"><span class="mediaIcon i_media_t" target="_Blank"></span>@ldfMiner_</a>
            <a href="mailto:official@ldfminer.com" class="link"><span class="mediaIcon i_media_m"></span>official@lfdminer.com</a>
        </div>
        <!-- <div class="linkSection linkSection_media dropline">
          <p class="linkTitle">Drop Us A Line</p>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请留下您的需求和联系方式"
            v-model="textarea">
          </el-input>
          <el-button size="small" class="input_message" v-on:click="msgSend">提交</el-button>
        </div> -->
        <div class="leave_msg">
          <div class="msg_box_head">
            <span class="msg_box_title">在线留言</span>
            <span class="msg_box_icon" :class="{'msg_icon_on': icon}" @click='openMsgBox'>+</span>
          </div>
          <div class="msg_box" v-if="msgBox">
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请再此输入您的留言（必填）"
              v-model="msg">
            </el-input>
            <el-input v-model="name" placeholder="姓名" class="msg_input"></el-input>
            <el-input v-model="phone" placeholder="电话（必填）" class="msg_input" type="tel"></el-input>
            <el-input v-model="email" placeholder="邮箱" class="msg_input" type="email"></el-input>
            <el-button type="success" :loading="input" class="input_btn" @click="msgSend">提 交</el-button>
          </div>
        </div>
	    </div>
		</div>   
  </div>
</template>

<script>
import Switchlan from './Switchlan'

export default {
  name: 'Myfooter',
  data () {
    return {
      msg: '',
      name: '',
      phone: '',
      email: '',
      icon: false,
      msgBox: false,
      input: false
    }
  },
  components: { Switchlan },
  methods: {
    msgSend: function () {
      if (this.msg) {
        if (this.phone) {
          this.input = true
          this.$http({
            url: 'http://www.yuxiulive.com/app1/addmsg',
            method: 'POST',
            body: {
              msg: this.msg,
              name: this.name,
              phone: this.phone,
              email: this.email
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }).then(function (response) {
            // 提交成功提醒
            if (response.data.code === 1) {
              this.$notify({
                title: '提交成功',
                message: '您的留言已提交成功，我们会尽快查看并处理',
                type: 'success'
              })
              // 重置数据
              this.msg = ''
              this.name = ''
              this.phone = ''
              this.email = ''
              this.icon = false
              this.msgBox = false
              this.input = false
            } else {
              this.$notify.error({
                title: '提交失败',
                message: '我们对此表示歉意，请检查您的网络或稍后再试'
              })
              this.input = false
            }
          }, function (response) {
            this.input = false
            // 提交失败提醒
            this.$notify.error({
              title: '提交失败',
              message: '我们对此表示歉意，请检查您的网络或稍后再试'
            })
            this.input = false
          })
        } else {
          this.$notify({
            title: '电话不能为空',
            message: '请留下您的联系方式，方便我们能联系到您',
            type: 'warning'
          })
        }
      } else {
        // 空白消息提醒
        this.$notify({
          title: '留言不能为空',
          message: '请填写您的留言，我们会尽快为您解答',
          type: 'warning'
        })
      }
    },
    openMsgBox: function () {
      console.log(this.icon)
      this.icon = !this.icon
      this.msgBox = !this.msgBox
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Myfooter {
		border-top: 1px solid #f2f2f2;
		background-color: #fff;
    height: 220px;
	}
	.footerWrap {
    width: 1100px;
    margin: 0 auto;
    position: relative;
    height: 100%;
	}
	.languageSwitch {
    position: absolute;
    right: 0;
    top: 10px;
    color: #999;
    font-size: 12px;
	}
	.languageSwitch .on {
		color: #32c057;
	}

	.linkLists {
    color: #999;
    padding-top: 25px;
	}
	.linkLists .linkSection {
		float: left;
    width: 185px;
	}
	.linkSection .linkTitle {
    font-size: 14px;
    margin-bottom: 15px;
	}
	.linkSection .link {
		display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 10px;
	}
  .dropline {
    width: 200px !important;
  }
  /*留言框*/
  .leave_msg {
    position: fixed;
    right: 0;
    bottom: 0;
    width: 220px;
    user-select: none;
  }
  .msg_box_head {
    height: 30px;
    background: #32c057;
    border-radius: 5px 5px 0 0;
  }
  .msg_box_title,.msg_box_icon {
    color: #fff;
    display: inline-block;
    width: 80px;
    text-align: center;
    line-height: 30px
  }
  .msg_box_icon {
    width: 30px;
    font-size: 26px;
    float: right;
    cursor: pointer;
  }
  .msg_icon_on {
    transform: rotate(45deg);
  }
  .msg_box {
    width: 200px;
    height: 243px;
    padding: 10px;
    background: #fafafa

  }
  .msg_input {
    margin: 3px 0;
  }
  .input_btn {
    float: right;
    margin-top: 3px;
    background: #32c057;
    border: #32c057
  }
</style>
