<template>
<div class="right">
	<p class="product_name">
	  {{detailText.name}}
	  <span class="product_hot" v-show='detailText.hot'>热门</span>
	</p>
	<p class="product_ifo">
	  {{detailText.ifo}}
	</p>
	<p class="product_price">
	  价格：
	  <span class="price_rmb">¥ {{detailText.prices[pick_price].rmb}}</span>
<!-- 	  <span class="price_bitcoin">( {{detailText.prices[pick_price].btc}} BTC )</span> -->
	</p>
	<!-- 规格 -->
	<div class="product_choose">
		<p class="product_choose_text">产品规格</p>
    <!-- 这里采用左侧图片的处理方法 用选中的索引值去渲染价格数据 -->
		<label v-for='(price,index) in detailText.prices' :id='index' class='product_btn' :class="{'choose_price':index==pick_price}">
		  <input :value='index' type='radio' class='product_btn_input' v-model='pick_price'/>
			<span>{{price.name}}</span>
		</label>
	</div>
	<!-- 数量 -->
	<div class="product_choose">
		<p class="product_choose_text">台数</p>
    <!-- 减少 -->
		<span class="num_btn" @click='minus'>-</span>
		<div class="choose_num_border">
		  <input class="choose_num" min="1" v-model='detailText.productNum' @blur="checkInput"></input>
		</div>
    <!-- 增加 -->
		<span class="num_btn" @click='add'>+</span>
	</div>
	<span class="buy_btn" @click='buy'>立即购买</span>
</div>
</template>

<script>
import Vue from 'vue'
import {MessageBox} from 'element-ui'

Vue.component(MessageBox)

export default {
  name: 'right',
  data () {
    return {
      pick_price: '0'
    }
  },
  props: ['detailText'],
  methods: {
    add: function () {
      this.detailText.productNum++
    },
    minus: function () {
      this.detailText.productNum > 1 ? this.detailText.productNum-- : this.detailText.productNum
    },
    // 弹窗使用element-ui MessageBox
    buy: function () {
      console.log(this)
      this.$prompt('咨询购买请联系我们，联系电话：1234567890。或者在下方给我们留言并注明您的联系方式，我们将竭诚为您服务！', '联系我们', {
        showCancelButton: true,
        cancelButtonText: '关闭',
        confirmButtonText: '提交',
        inputValidator: function ({value}) {}
      }).then(({ value }) => {
        this.$http({
          url: 'http://www.lingyun.party/app1/addmsg',
          method: 'POST',
          body: {
            msg: value,
            phone: ''
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function (response) {
          console.log(response.data)
          // 提交成功提醒
          this.$notify({
            title: '提交成功',
            message: '您的留言已提交成功，我们会尽快查看并处理',
            type: 'success'
          })
        }, function (response) {
          console.log(response.data)
          // 提交失败提醒
          this.$notify.error({
            title: '提交失败',
            message: '我们对此表示歉意，请检查您的网络或稍后再试'
          })
        })
      })
    },
    // 检查台数合法性
    checkInput: function () {
      if (this.detailText.productNum < 1) {
        this.$message({
          showClose: true,
          message: '不能少于1台',
          type: 'warning'
        })
        this.detailText.productNum = 1
      }
    }
  }
}
</script>

<style  scoped>
.right {
	height: 388px;
	width: 570px;
	float: right;
}
.product_name {
	font-size: 32px;
  color: #333;
  margin-bottom: 10px
}
.product_hot {
  padding: 0 12px;
  height: 22px;
  line-height: 22px;
  color: #fff;
  border-radius: 2px;
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  background-color: #ff7611
}
.product_ifo {
	font-size: 16px;
  color: #666;
  margin-top: 15px;
}
.product_price {
	background-color: #f1f1f3;
  font-size: 16px;
  height: 50px;
  line-height: 50px;
  padding: 0 10px;
  margin: 30px 0 40px;
}
.price_rmb,.price_bitcoin {
	vertical-align: top;
}
.price_rmb {
	font-size: 26px;
}
.price_bitcoin {
	font-size: 14px;
  color: #999;
}
/*产品选择*/
.product_choose {
	height: 40px;
	margin-bottom: 30px;
}
.product_choose_text {
  display: inline-block;
  width: 90px;
  line-height: 40px;
  vertical-align: top;
}
.product_btn {
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  display: inline-block;
  background-color: #fff;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #333;
  margin-right: 10px;
  user-select: none;
}
.product_btn_input {
	opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  left: -999px;
}
.choose_price {
	border-color: #32c057;
}
/*数量选择*/
.num_btn {
  width: 58px;
  height: 38px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 28px;
  color: #999;
  text-align: center;
  background-color: #FFF;
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
  cursor: pointer;
  user-select: none;
}
.choose_num_border {
  width: 78px;
  height: 28px;
  padding: 0 10px;
  padding-top: 10px;
  background-color: #FFF;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  margin: 0 10px;
  vertical-align: top;
}
.choose_num {
	width: 100%;
  display: block;
  text-align: center;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.buy_btn {
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  background-color: #32c057;
  border: 1px solid #32c057;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  user-select: none;
}
</style>