<template>
<div class="product_detail">
	<div class="pageTitle">
		<h2>{{ $t("subTitle.miners") }}</h2>
  </div>
  <div class="detailWrap">
  	<!-- 左侧产品图展示模块 detail-pics用于传递数据 -->
		<left :detail-pics='detailPics'></left>
		<!-- 右侧信息展示模块 detail-text.sync双向绑定数据 -->
		<right :detail-text.sync='detailText'></right>
  </div>
  <div class="details">
  	<span class="details_title">产品详情</span>
  </div>
  <!-- 图文详情表格和图片处理 单个图片自动居中独占一行 -->
  <div class="details_ifo">
    <div v-if='parameter' class="parameter_box">
      <h4 class="parameter">规格参数</h4>
      <table class="details_table">
      	<tr v-for="detail in details">
          <td class="detail_td td_name">{{detail.name}}</td>
          <td class="detail_td td_data">{{detail.data}}</td>
        </tr>
      </table>
    </div>
    <img v-for='detailImage in detailImages' :src='detailImage.image' />
    <div class="sold_ifo">
      <h4 class="soli_title">注意事项</h4>1. 机器变形或者部件脱落，请不要通电，联系售后处理。<br><br>2. 在安装或维护时请先装矿机断电，再进行维护。<br><br>3. 接线时一定要注意电源线的方向,接反会引起电源或矿机故障。<br><br>4. 注意防尘防潮，以免影响矿机正常工作。<br><br>5. 当电源的实际输出达不到矿机所需求时，算力会提升不上去。
    </div>
    <div class="sold_ifo">
      <h4 class="soli_title">售后说明</h4>1）投资需谨慎，本显卡矿机一经售出，不支持退款或退货；<br>2）到货后180天内支持返修；<br>3）矿机价格可能会根据市场情况调整而不做事先通知和价格补偿，敬请谅解；<br><br><br>对于以下情况不支持返修：<br>1.买家私自拆卸，改装元器件；<br>2.在到货后，遭遇天气等自然灾害受损；<br>3.进水、电路板和元器件受潮、出现腐蚀造成的损坏；<br>4.买家另行购买劣质电源造成的损坏；<br>5.电路板存在毁痕迹的或者芯片被烧毁的；<br>6.一切由买家自行造成的损坏；<br><br><br>如果您有其他任何疑问可咨询：<br>电话: 18617127006
    </div>
  </div>
</div>
</template>

<script>
import left from '../components/product_detail_pic.vue'
import right from '../components/product_detail_text.vue'

export default {
  name: 'product_detail',
  data () {
    return {
      detailPics: [
        // 此处把图片存放在static文件夹，需要注意，此处的打包后的路径问题
        {url: 'static/img/AvalonMiner721.jpg'}
      ],
      detailText: {
        name: '阿瓦隆AvalonMiner 721',
        // hot为产品名后的‘热门’icon，boolean类型值，true为显示icon，false不显示
        hot: true,
        ifo: '',
        prices: [
          {
            name: '矿机(无电源)',
            rmb: '5,800.00'
          }
        ],
        productNum: 1
      },
      parameter: true,
      details: [
        {
          name: '额定算力',
          data: '6TH/S（-5%至＋10%）'
        },
        {
          name: '墙上功耗',
          data: '900W（-5%至＋15%）'
        },
        {
          name: '能耗比',
          data: '150W/T'
        },
        {
          name: '芯片数量',
          data: '72枚 (16纳米 A3212芯片)'
        },
        {
          name: '超频',
          data: '范围 +0%~+10%'
        },
        {
          name: '电源接口',
          data: '8 单路 6PIN 接口'
        },
        {
          name: '几何尺寸',
          data: '340*136*150 mm3'
        },
        {
          name: '整机重量',
          data: '4.3kg'
        },
        {
          name: '风扇',
          data: '进风温度 -5℃ 至 40℃'
        }
      ],
      detailImages: [ ],
      service_date: '180'
    }
  },
  // 组件注册
  components: { left, right },
  // 响应路由参数的变化
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log('路由参数由' + from.params.id + '变为' + to.params.id)
    },
    detailText: function () {
      console.log(this)
    }
  }
}
</script>

<style scoped>
.product_detail {
  background-color: #ffffff;
  width: 1100px;
  margin: 0 auto;
}
.pageTitle {
  font-size: 26px;
  padding: 25px 0;
}
.detailWrap {
  height: 578px;
  margin-bottom: 50px
}
.details {
	border-bottom: 1px solid #ccc;
  height: 53px;
}
.details_title {
	color: #f8b600;
	height: 50px;
  line-height: 50px;
  display: inline-block;
  border-bottom: 3px solid #f8b600;
}
.details_ifo {
	margin: 40px 0 50px
}
.details_table {
  margin: 0 auto
}
.details_ifo img {
	display: block;
	margin: 0 auto
}
/*规格参数*/
.parameter,.soli_title {
  font-size: 26px;
  margin: 0 0 30px 0;
  text-align: center;
}
/*表格*/
.parameter_box {
  margin: 0 0 50px 0
}
.detail_td {
  padding: 13px 25px;
  text-align: center;
  border: 1px solid #e5e5e5;
  margin-left: -1px
}
.td_name {
  width: 150px;
}
.td_data {
  width: 650px;
}
/*注意事项*/
.sold_ifo {
  margin: 0 auto 50px;
  line-height: 26px;
  width: 762px;
  padding: 30px 70px 50px 70px;
  border: 1px solid #e5e5e5
}
</style>
