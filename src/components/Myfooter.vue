<template>
  <div class="Myfooter">
		<div class="footerWrap">
			<div class="languageSwitch">
        <a class="en">English</a>
          /
        <a class="ch on">中文</a>
      </div>
      <div class="linkLists">
        <div class="linkSection">
            <p class="linkTitle">About Us</p>
            <a href="/#/about" class="link">关于</a>
            <a href="/#/the_faq" class="link">FAQ</a>
        </div>
        <div class="linkSection">
            <p class="linkTitle">Policy</p>
            <a href="/default/terms_of_use" class="link">使用条款</a>
        </div>
        <div class="linkSection">
            <p class="linkTitle">Explore</p>
            <a href="/#/home" class="link">首页</a>
            <a href="/#/product_list" class="link">矿机</a>
            <a href="/#/config_info" class="link">配置说明</a>
            <a href="/#/news" class="link">新闻</a>
        </div>
        <div class="linkSection linkSection_media">
            <p class="linkTitle">Contact Us</p>
            <a href="https://www.facebook.com/ldf Miner-1029835897114795/" class="link" target="_Blank"><span class="mediaIcon i_media_f"></span>@ldfMiner</a>
            <a href="https://twitter.com/ldfMiner_" class="link"><span class="mediaIcon i_media_t" target="_Blank"></span>@ldfMiner_</a>
            <a href="mailto:official@ldfminer.com" class="link"><span class="mediaIcon i_media_m"></span>official@lfdminer.com</a>
        </div>
	    </div>
		</div>   
  </div>
</template>

<script>
export default {
  name: 'Myfooter',
  data () {
    return {
      msg: 'This is the footer.vue'
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
</style>
