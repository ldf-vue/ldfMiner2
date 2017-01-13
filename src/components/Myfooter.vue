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
        <div class="linkSection linkSection_media dropline">
          <p class="linkTitle">Drop Us A Line</p>
          <el-input
            type="textarea"
            :rows="3"
            placeholder="请留下您的需求和联系方式"
            v-model="textarea">
          </el-input>
          <el-button size="small" class="input_message" v-on:click="msgSend">提交</el-button>
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
      msg: 'This is the footer.vue',
      textarea: ''
    }
  },
  components: { Switchlan },
  methods: {
    msgSend: function () {
      var msg = this.textarea
      if (msg) {
        this.$http.post(
          'http://www.yuxiulive.com/addmsg',
          {
            msg: msg
          }
        ).then(function (response) {
          console.log(response.data)
          console.log(1)
        }, function (response) {
          console.log(response.data)
          console.log(2)
        })
      }
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
</style>
