<template>
	<div class="left">
	<!-- 大图 -->
		<div class="left_large">
			<img class="large_pic" :src='detailPics[pick_pic].url'>
		</div>
		<!-- 小图 -->
		<div class="left_small">
		<!-- 使用表单单选处理 -->
			<label v-for='(detailPic,index) in detailPics' :id='index' class='small_pic' :class="{'pic_picked':index==pick_pic}">
			  <input :value='index' type='radio' class='small_pic_input' v-model='pick_pic'/>
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
      // 用于获取选中小图索引从而渲染大图
      pick_pic: '0'
    }
  },
  props: ['detailPics']
}
</script>

<style scoped>
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
	opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  left: -999px;
}
.small_pic {
	font-size: 0px;
	margin: 0;
	float: left;
	display: block;
	margin: 10px 10px 0 0;
}
.pic_picked {
	width: 84px;
	height: 84px;
	border: 2px solid #32c057;
	overflow: hidden;
}
</style>