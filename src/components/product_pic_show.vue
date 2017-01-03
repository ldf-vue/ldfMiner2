<template>
	<div id="left">
		<div class="left_large">
			<img class="large_pic" src="">
		</div>
		<div class="left_small">
			<ul>
				<li v-for='' class="small_pic" :index='$index'></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import vue from 'vue'
	var pic = new vue({
		el: '#left',
		data: {
			detailPics: [
				{url: '../assets/img/kj1.jpg'},
				{url: '../assets/img/kj2.jpg'},
				{url: '../assets/img/kj3.jpg'},
				{url: '../assets/img/kj4.jpg'},
				{url: '../assets/img/kj5.jpg'}
			]
		}
	})
</script>

<style>
	
</style>