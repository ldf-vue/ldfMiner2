<template>
	<div class="left">
		<div class="left_large">
			<img class="large_pic" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png">
		</div>
		<div class="left_small">
			<label v-for='detailPic in detailPics' class="small_pic">
			  <input type="radio" class="small_pic_input" v-model='pick_pic' value="index"></input>
				<img :src='detailPic.url' class="small_pic_img">
			</label>
		</div>
	</div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      pick_pic: ''
    }
  },
  props: ['detailPics']
}
</script>

<style>
.left {
  width: 480px;
  height: 578px;
  float: left;
}
.left_large,.large_pic {
	width: 478px;
	height: 478px;
}
.left_large,.small_pic {
	border: 1px solid #dfdfdf;
}
.left_small {
	width: 490px;
	height: 98px;
}
.small_pic,.small_pic_img {
	width: 86px;
	height: 86px;
}
.small_pic_input {
	/*opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  left: -999px;*/
}
.small_pic {
	font-size: 0px;
	margin: 0;
	float: left;
	display: block;
	margin: 10px 10px 0 0;
}
.pic_click {
	width: 84px;
	height: 84px;
	border: 2px solid #32c057;
}
</style>