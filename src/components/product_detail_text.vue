<template>
<div class="right">
	<p class="product_name">
	  {{detailText.name[i]}}
	  <span class="product_hot" v-show='detailText.hot'>{{$t("detail.hot")}}</span>
	</p>
	<p class="product_ifo">
	  {{detailText.ifo[i]}}
	</p>
	<p class="product_price">
	  {{$t("detail.price")}}：
	  <span class="price_rmb">¥ {{detailText.prices[pick_price].price}}</span>
	</p>
	<!-- 规格 -->
	<div class="product_choose">
		<p class="product_choose_text">{{$t("detail.standard")}}</p>
    <!-- 这里采用左侧图片的处理方法 用选中的索引值去渲染价格数据 -->
		<label v-for='(price,index) in detailText.prices' :id='index' class='product_btn' :class="{'choose_price':index==pick_price}">
		  <input :value='index' type='radio' class='product_btn_input' v-model='pick_price'/>
			<span>{{price.standard}}</span>
		</label>
	</div>
	<!-- 数量 -->
	<div class="product_choose">
		<p class="product_choose_text">{{$t("detail.num")}}</p>
    <!-- 减少 -->
		<span class="num_btn" @click='minus'>-</span>
		<div class="choose_num_border">
		  <input class="choose_num" min="1" v-model='detailText.productNum' @blur="checkInput"></input>
		</div>
    <!-- 增加 -->
		<span class="num_btn" @click='add'>+</span>
	</div>
	<span class="buy_btn" @click='buy'>{{$t("detail.buy")}}
    <!-- <el-dialog title='在线留言' v-model='msgBox' size='tiny'>
          <el-form>
            <el-input
              type="textarea"
              :rows="3"
              placeholder="请再此输入您的留言（必填）"
              v-model="msg">
            </el-input>
            <el-input v-model="name" placeholder="姓名" class="msg_input"></el-input>
            <el-input v-model="phone" placeholder="电话（必填）" class="msg_input" type="tel"></el-input>
            <el-input v-model="email" placeholder="邮箱" class="msg_input" type="email"></el-input>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="msgBox = false">取 消</el-button>
            <el-button type="warning" @click="msgSend" :loading="input">提 交</el-button>
          </div>
        </el-dialog> -->
  </span>
</div>
</template>

<script>
import Vue from 'vue'
import {MessageBox} from 'element-ui'
import store from '../vuex.js'

Vue.component(MessageBox)

export default {
  name: 'right',
  mounted: function () {
    if (this.$lang === 'cn') {
      this.i = 0
    } else {
      this.i = 1
    }
  },
  data () {
    return {
      i: 0,
      pick_price: 0
    }
  },
  props: ['detailText'],
  watch: {
    $lang: function () {
      var lang = this.$lang
      if (lang === 'cn') {
        this.i = 0
      } else {
        this.i = 1
      }
    }
  },
  methods: {
    add: function () {
      this.detailText.productNum++
    },
    minus: function () {
      this.detailText.productNum > 1 ? this.detailText.productNum-- : this.detailText.productNum
    },
    buy: function() {
      store.commit('open')
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
	border-color: #f8b600;
}
/*数量选择*/
.num_btn {
  width: 58px;
  height: 38px;
  line-height: 38px;
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
  background-color: #f8b600;
  border: 1px solid #f8b600;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  user-select: none;
}
</style>