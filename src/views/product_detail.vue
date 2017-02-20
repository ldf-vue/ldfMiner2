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
  	<span class="details_title">{{$t("detail.detail_title")}}</span>
  </div>
  <!-- 图文详情表格和图片处理 单个图片自动居中独占一行 -->
  <div class="details_ifo">
    <div v-if='parameter' class="parameter_box">
      <h4 class="parameter">{{$t("detail.table_detail_title")}}</h4>
      <table class="details_table">
      <!-- ============================中文====================================== -->
      	<tr>
          <td class="detail_td td_name" v-if="detail.Hash_Rate">{{$t("detail.Hash_Rate")}}</td>
          <td class="detail_td td_data" v-if="detail.Hash_Rate">{{detail.Hash_Rate}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Total_Hash">{{$t("detail.Total_Hash")}}</td>
          <td class="detail_td td_data" v-if="detail.Total_Hash">{{detail.Total_Hash}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Power_Consumption">{{$t("detail.Power_Consumption")}}</td>
          <td class="detail_td td_data" v-if="detail.Power_Consumption">{{detail.Power_Consumption}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Power_Efficiency">{{$t("detail.Power_Efficiency")}}</td>
          <td class="detail_td td_data" v-if="detail.Power_Efficiency">{{detail.Power_Efficiency}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Input_Voltage">{{$t("detail.Input_Voltage")}}</td>
          <td class="detail_td td_data" v-if="detail.Input_Voltage">{{detail.Input_Voltage}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Rated_Voltage">{{$t("detail.Rated_Voltage")}}</td>
          <td class="detail_td td_data" v-if="detail.Rated_Voltage">{{detail.Rated_Voltage}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.EER">{{$t("detail.EER")}}</td>
          <td class="detail_td td_data" v-if="detail.EER">{{detail.EER}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Chips_Per_Unit">{{$t("detail.Chips_Per_Unit")}}</td>
          <td class="detail_td td_data" v-if="detail.Chips_Per_Unit">{{detail.Chips_Per_Unit}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Number_Chips">{{$t("detail.Number_of_Chips")}}</td>
          <td class="detail_td td_data" v-if="detail.Number_Chips">{{detail.Number_Chips}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Operation_Panel">{{$t("detail.Operation_Panel")}}</td>
          <td class="detail_td td_data" v-if="detail.Operation_Panel">{{detail.Operation_Panel}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Overclock">{{$t("detail.Overclock")}}</td>
          <td class="detail_td td_data" v-if="detail.Overclock">{{detail.Overclock}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Dimensions">{{$t("detail.Dimensions")}}</td>
          <td class="detail_td td_data" v-if="detail.Dimensions">{{detail.Dimensions}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Weight">{{$t("detail.Weight")}}</td>
          <td class="detail_td td_data" v-if="detail.Weight">{{detail.Weight}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Cooling">{{$t("detail.Cooling")}}</td>
          <td class="detail_td td_data" v-if="detail.Cooling">{{detail.Cooling}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Operating_Temperature">{{$t("detail.Operating_Temperature")}}</td>
          <td class="detail_td td_data" v-if="detail.Operating_Temperature">{{detail.Operating_Temperature}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Operating_Humidity">{{$t("detail.Operating_Humidity")}}</td>
          <td class="detail_td td_data" v-if="detail.Operating_Humidity">{{detail.Operating_Humidity}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Noise_Specifications">{{$t("detail.Noise_Specifications")}}</td>
          <td class="detail_td td_data" v-if="detail.Noise_Specifications">{{detail.Noise_Specifications}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Network_Connection">{{$t("detail.Network_Connection")}}</td>
          <td class="detail_td td_data" v-if="detail.Network_Connection">{{detail.Network_Connection}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Power_Interface">{{$t("detail.Power_Interface")}}</td>
          <td class="detail_td td_data" v-if="detail.Power_Interface">{{detail.Power_Interface}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Connection_Supply">{{$t("detail.Connection_to_the_Supply")}}</td>
          <td class="detail_td td_data" v-if="detail.Connection_Supply">{{detail.Connection_Supply}}</td>
        </tr>
        <!-- ============================英文============================= -->
        <tr>
          <td class="detail_td td_name" v-if="detail.Hash_Rate_en">{{$t("detail.Hash_Rate")}}</td>
          <td class="detail_td td_data" v-if="detail.Hash_Rate_en">{{detail.Hash_Rate_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Total_Hash_en">{{$t("detail.Total_Hash")}}</td>
          <td class="detail_td td_data" v-if="detail.Total_Hash_en">{{detail.Total_Hash_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Power_Consumption_en">{{$t("detail.Power_Consumption")}}</td>
          <td class="detail_td td_data" v-if="detail.Power_Consumption_en">{{detail.Power_Consumption_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Power_Efficiency_en">{{$t("detail.Power_Efficiency")}}</td>
          <td class="detail_td td_data" v-if="detail.Power_Efficiency_en">{{detail.Power_Efficiency_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Input_Voltage_en">{{$t("detail.Input_Voltage")}}</td>
          <td class="detail_td td_data" v-if="detail.Input_Voltage_en">{{detail.Input_Voltage_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Rated_Voltage_en">{{$t("detail.Rated_Voltage")}}</td>
          <td class="detail_td td_data" v-if="detail.Rated_Voltage_en">{{detail.Rated_Voltage_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.EER_en">{{$t("detail.EER")}}</td>
          <td class="detail_td td_data" v-if="detail.EER_en">{{detail.EER_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Chips_Per_Unit_en">{{$t("detail.Chips_Per_Unit")}}</td>
          <td class="detail_td td_data" v-if="detail.Chips_Per_Unit_en">{{detail.Chips_Per_Unit_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Number_Chips_en">{{$t("detail.Number_of_Chips")}}</td>
          <td class="detail_td td_data" v-if="detail.Number_Chips_en">{{detail.Number_Chips_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Operation_Panel_en">{{$t("detail.Operation_Panel")}}</td>
          <td class="detail_td td_data" v-if="detail.Operation_Panel_en">{{detail.Operation_Panel_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Overclock_en">{{$t("detail.Overclock")}}</td>
          <td class="detail_td td_data" v-if="detail.Overclock_en">{{detail.Overclock_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Dimensions_en">{{$t("detail.Dimensions")}}</td>
          <td class="detail_td td_data" v-if="detail.Dimensions_en">{{detail.Dimensions_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Weight_en">{{$t("detail.Weight")}}</td>
          <td class="detail_td td_data" v-if="detail.Weight_en">{{detail.Weight_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Cooling_en">{{$t("detail.Cooling")}}</td>
          <td class="detail_td td_data" v-if="detail.Cooling_en">{{detail.Cooling_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Operating_Temperature_en">{{$t("detail.Operating_Temperature")}}</td>
          <td class="detail_td td_data" v-if="detail.Operating_Temperature_en">{{detail.Operating_Temperature_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Operating_Humidity_en">{{$t("detail.Operating_Humidity")}}</td>
          <td class="detail_td td_data" v-if="detail.Operating_Humidity_en">{{detail.Operating_Humidity_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Noise_Specifications_en">{{$t("detail.Noise_Specifications")}}</td>
          <td class="detail_td td_data" v-if="detail.Noise_Specifications_en">{{detail.Noise_Specifications_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Network_Connection_en">{{$t("detail.Network_Connection")}}</td>
          <td class="detail_td td_data" v-if="detail.Network_Connection_en">{{detail.Network_Connection_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Power_Interface_en">{{$t("detail.Power_Interface")}}</td>
          <td class="detail_td td_data" v-if="detail.Power_Interface_en">{{detail.Power_Interface_en}}</td>
        </tr>
        <tr>
          <td class="detail_td td_name" v-if="detail.Connection_Supply_en">{{$t("detail.Connection_to_the_Supply")}}</td>
          <td class="detail_td td_data" v-if="detail.Connection_Supply_en">{{detail.Connection_Supply_en}}</td>
        </tr>
      </table>
    </div>
    <img v-for='detailImage in detailImages' :src='detailImage' />
    <div class="sold_ifo">
      <h4 class="soli_title">{{$t("detail.title1")}}</h4>{{$t("detail.content1_1")}}<br><br>{{$t("detail.content1_2")}}<br><br>{{$t("detail.content1_3")}}<br><br>{{$t("detail.content1_4")}}<br><br>{{$t("detail.content1_5")}}
    </div>
    <div class="sold_ifo">
      <h4 class="soli_title">{{$t("detail.title2")}}</h4>{{$t("detail.content2_1_1")}}<br>{{$t("detail.content2_1_2")}}<br>{{$t("detail.content2_1_3")}}<br><br><br>{{$t("detail.content2_2")}}<br>{{$t("detail.content2_2_1")}}<br>{{$t("detail.content2_2_2")}}<br>{{$t("detail.content2_2_3")}}<br>{{$t("detail.content2_2_4")}}<br>{{$t("detail.content2_2_5")}}<br>{{$t("detail.content2_2_6")}}<br><br><br>{{$t("detail.content2_3_1")}}<br>{{$t("detail.content2_3_2")}}
    </div>
  </div>
</div>
</template>

<script>
import left from '../components/product_detail_pic.vue'
import right from '../components/product_detail_text.vue'
import '../assets/js/detail-package.js'

export default {
  name: 'product_detail',
  mounted: function () {
    if (this.$lang === 'cn') {
      this.i = 0
    } else {
      this.i = 1
    }
    var data = this.$route.params.id
    this.$http({
      url: 'http://www.lingyun.party/app1/getDetails?id=' + data,
      method: 'GET'
    }).then(function (response) {
      console.log(response.body)
      this.body = response.body
      this.detailPics = response.body.pics
      this.detailText.name = response.body.title
      this.detailText.ifo = response.body.keywords
      this.detailText.hot = response.body.hot
      // 处理规格价格数据
      var priceData = response.body.prices
      var prices = []
      for (var i = 0, l = priceData.length; i < l; i++) {
        prices.push({price: priceData[i].price[this.i], standard: priceData[i].standard[this.i]})
      }
      this.detailText.prices = prices
      // 处理表格数据
      var table = response.body.param_details[this.i]
      this.detail = table
      // 处理图片数据
      this.detailImages = response.body.pics_details
      this.parameter = response.body.parameter
    }, function (response) {
      console.log(111111111)
    })
  },
  data () {
    return {
      body: '',
      i: 0,
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
      detail: [
        {
          name: '额定算力',
          data: '6TH/S（-5%至＋10%）'
        }
      ],
      detailImages: [ ],
      service_date: '180'
    }
  },
  // 组件注册
  components: { left, right },
  watch: {
    $lang: function () {
      var lang = this.$lang
      if (lang === 'cn') {
        this.i = 0
      } else {
        this.i = 1
      }
      // 处理规格价格数据
      var priceData = this.body.prices
      var prices = []
      for (var i = 0, l = priceData.length; i < l; i++) {
        prices.push({price: priceData[i].price[this.i], standard: priceData[i].standard[this.i]})
      }
      this.detailText.prices = prices
      // 处理表格数据
      var table = this.body.param_details[this.i]
      console.log(table)
      this.detail = table
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
  margin: 30px auto 50px;
  line-height: 26px;
  width: 762px;
  padding: 30px 70px 50px 70px;
  border: 1px solid #e5e5e5
}
</style>
