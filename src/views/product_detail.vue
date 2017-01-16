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
  <!-- 图文详情图片处理 单个图片自动居中独占一行 -->
  <div class="details_ifo">
    <h4 class="parameter">规格参数</h4>
    <table class="details_table">
    	<tr v-for="detail in details">
        <td class="detail_td td_name">{{detail.name}}</td>
        <td class="detail_td td_data">{{detail.data}}</td>
      </tr>
    </table>
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
        {url: 'static/img/kj1.jpg'},
        {url: 'static/img/kj2.jpg'},
        {url: 'static/img/kj3.jpg'},
        {url: 'static/img/kj4.jpg'},
        {url: 'static/img/kj5.jpg'}
      ],
      detailText: {
        name: 'PandaMiner B1 Plus',
        // hot为产品名后的‘热门’icon，boolean类型值，true为显示icon，false不显示
        hot: true,
        ifo: '最新PandaMiner B1 Plus矿机所采用核心GPU为RX480，更高算力更低功耗！',
        prices: [
          {
            name: '矿机+电源',
            rmb: '15,500.00',
            btc: '2.243'
          },
          {
            name: '矿机(无电源)',
            rmb: '15,000.00',
            btc: '2.167'
          }
        ],
        productNum: '1'
      },
      details: [
        {
          name: '额定算力',
          data: '13 TH / s的±5％'
        },
        {
          name: '墙上功耗',
          data: '1300瓦+12%（比特大陆APW3-1600瓦电源，AC / DC 93％的效率，25℃环境温度）'
        },
        {
          name: '电源效率',
          data: '0.1J/GH + 12%（墙上，AC / DC 93％的效率，25°C的环境温度）'
        },
        {
          name: '额定电压',
          data: '11.6~13.0V'
        },
        {
          name: '芯片数量',
          data: '189片 BM1387'
        },
        {
          name: '外形尺寸',
          data: '350毫米（L）*135毫米（W）*158毫米（H）'
        },
        {
          name: '冷却',
          data: '2×12038风扇'
        },
        {
          name: '工作温度',
          data: '25℃至40℃'
        },
        {
          name: '工作湿度',
          data: '5%RH-95%RH，非凝露'
        },
        {
          name: '网络连接',
          data: '以太网'
        },
        {
          name: '电源连接方式',
          data: '每块算力板三个PCIE接口都需要连接，推荐使用独立电源给整机供电，非独立电源情况下，3个算力板可以分别连接到不同的电源，但是每块算力板不能连接多个电源，并保证算力板最后通电'
        }
      ],
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
	color: #32c057;
	height: 50px;
  line-height: 50px;
  display: inline-block;
  border-bottom: 3px solid #32c057;
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
.parameter {
  text-align: center;
  font-size: 26px;
  margin-bottom: 15px 
}
/*表格*/
.detail_td {
  padding: 13px 25px;
  text-align: center;
  border: 1px solid #e5e5e5;
  margin-left: -1px
}
.td_name {
  width: 100px;
}
.td_data {
  width: 650px;
}
</style>
