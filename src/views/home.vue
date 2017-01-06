<template>
    <div class="home">
      <div class="session session1">
        <a href="/#/product_detail/id">
          <h1>{{ $t("homeContent.session1.title") }}</h1>
          <h3>{{ $t("homeContent.session1.subTitle") }}</h3>
          <span class="learn_more">{{ $t("homeContent.session1.lernMore") }}</span>
          <br />
          <img src="../assets/logo.png">
        </a>
      </div>
      <div class="session session2">
        <h2>{{ $t("homeContent.session2.title") }}</h2>
        <ul>
          <li v-for="item in items">
            <a href="/#/product_detail/id">
              <img src="../assets/logo.png" alt="" class="productImg">
            </a>
            <p class="productName">PandaMiner B1 Plus</p>
            <p class="productSlogan">性价比之选</p>
            <table class="productParamTable">
              <tbody>
                <tr>
                  <td>显卡数量：8</td>
                  <td>核心显卡：RX480</td>
                </tr>
              </tbody>
            </table>
            <a href="javascript:void(0)" v-if="item.comingSoon" class="btn buyNow" :class="{'noComing':item.comingSoon}">{{ item.money }}</a>
            <a href="/#/product_detail/id" v-else class="btn buyNow" :class="{'noComing':item.comingSoon}">{{ item.money }}</a>
          </li>
        </ul>
        <a href="/#/product_list" class="btnMoreProduct">了解更多商品</a>
      </div>
      <div class="session session3">
        <h2>什么是显卡矿机？</h2>
        <div class="definition">
          <p>显卡矿机是支持多种虚拟货币算法挖矿的挖矿装置。不同于普通显卡，显卡矿机是通过多张高配置显卡，定制化、高兼容的机箱，以及专业的矿机架等专门针对挖矿需求优化设计的设备组装而成。
          </p>
          <p>显卡矿机极具灵活性，能针对不同的虚拟货币运行不同的算法，做到一机多用。在比特币矿机更新换代速度日益放缓且价格日渐增高的今天，显卡矿机不失为更好的虚拟币投资选择。
          </p>
        </div>
        <ul class="featureList">
          <li class="featureItem">
            <p class="compare">对比普通显卡挖矿</p>
            <p class="feature">多张顶级配置显卡，更高算力更低功耗</p>
          </li>
          <li class="featureItem featureItem_center">
            <p class="compare">对比比特币矿机挖矿</p>
            <p class="feature">更短回本周期，全网算力攀升较缓和<br>可适用于多种虚拟加密货币算法</p>
          </li>
          <li class="featureItem">
            <p class="uniqueFeature">高性价比，极低部署成本！</p>
          </li>
        </ul>
      </div>
      <div class="session session4">
        <p class="logo">Panda Miner</p>
        <div class="content">
          <h2>我们是谁？</h2>
          <h3>全球首家专业显卡矿机制造商 提供虚拟货币算法解决方案</h3>
          <p>熊猫矿机是一家全球领先的加密货币硬件设备专业制造商，伴随着规模日益扩大的虚拟币采矿业，集合了众多行业内专业人士，组建成一支全方位的团队，在半年内研发出适用于多种虚拟货币的显卡矿机。未来我们将会不断优化产品方案，以满足日新月异的挖矿需求。我们的愿景是将熊猫矿机打造成为虚拟币硬件设备全球第一品牌。</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'home.vue',
      items: [
        {
          money: '￥15,000.00',
          comingSoon: false
        },
        {
          money: '即将上市',
          comingSoon: true
        }
      ]
    }
  }
}
</script>

<style type="text/css">
  body {
    font-size: 14px;
    color: #333;
  }
</style>

<style scoped>
  .home {
    
  }
  .session {
    margin: 0 auto;
    font-family: '微软雅黑';
  }
  .session1 {
    width: 1100px;
    height: 550px;
    /*background: yellowgreen;*/
    position: relative;
    text-align: center;
  }
  .session1 h1 {
    font-size: 36px;
    padding-top: 110px;
  }
  .session h3 {
    font-size: 26px;
    margin-bottom: 35px;
  }
  .session1 a {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .session1 img {
    margin-top: 28px;
    width: 300px;
    height: 200px;
  }
  .session1 .learn_more {
    border: 1px solid #b5b0b0;
    padding: 8px 30px;
    border-radius: 6px;
    background: #f3f1f1;
    position: relative;
  }
  .session1 .learn_more:after {
    content: "";
    display: inline-block;
    position: absolute;
    right: 12px;
    width: 10px;
    height: 10px;
    border: 1px solid #b5b0b0;
    top: 50%;
    margin-top: -5px;
    transform: rotate(45deg);
    border-left: 0;
    border-bottom: 0;
  }
  .session2 {
    width: 1100px;
    height: 680px;
    /*background: #8fe2b8;*/
    text-align: center;
  }
  .session2 h2 {
    padding-top: 30px;
    font-size: 26px;
    text-align: center;
    margin-bottom: 30px;
  }
  .session2 ul {
    position: relative;
    margin-left: -65px;
    overflow: hidden;
  }
  .session2 li {
    width: 450px;
    margin-left: 110px;
    float: left;
    text-align: center;
  }
  .session2 li img {
    display: block;
    margin: 0 auto 15px;
    width: 386px;
    height: 196px;
  }
  .session2 .productName {
    font-size: 24px;
    color: #333;
    font-weight: bold;
  }
  .session2 .productSlogan {
    font-size: 16px;
    color: #666;
  }
  .session2 .productParamTable {
    width: 100%;
    margin: 15px 0 25px;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .productParamTable td {
    width: 33.3%;
    border: 1px solid #e5e5e5;
    height: 40px;
  }
  .session2 .buyNow {
    width: 160px;
    display: block;
    margin: 0 auto;
    font-size: 17px;
    background-color: #32c057;
    border: 1px solid #32c057;
    color: #fff;
    height: 40px;
    line-height: 40px;
    border-radius: 6px;
  }
  .session2 .buyNow.noComing {
    background-color: #c1c1c1;
    border: 1px solid #c1c1c1;
    color: #fff;
    cursor: default;
  }
  .session2 .btnMoreProduct {
    margin: 50px auto 0;
    display: block;
    width: 160px;
    background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    height: 40px;
    line-height: 40px;
    border-radius: 6px;
  }
  .session3 {
    width: 1100px;
    /*background: #de4a4a;*/
    height: 700px;
    position: relative;
    background: #333333 url(../assets/img/bg.jpg) 50% 50% no-repeat;
  }
  .session3 h2 {
    padding-top: 145px;
    font-size: 26px;
    color: #fff;
    text-align: center;
  }
  .session3 .definition {
    width: 1000px;
    margin: 30px auto 0;
    line-height: 24px;
    color: #fff;
  }
  .session3 .definition p {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .featureList {
    position: absolute;
    left: 50px;
    top: 520px;
    width: 1000px;
    text-align: center;
    font-size: 0;
  }
  .featureList .featureItem {
    width: 285px;
    display: inline-block;
    vertical-align: top;
  }
  .featureList .compare {
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
  }
  .featureList .feature {
    color: #fff;
    font-size: 16px;
    line-height: 25px;
  }
  .featureList .featureItem_center {
    padding: 0 65px;
  }
  .session3 .featureList .uniqueFeature {
    font-size: 20px;
    color: #32c057;
    padding-top: 25px;
  }

  .session4 {
    width: 1100px;
    height: 505px;
    background-color: #f9f9f9;
    padding-top: 95px
  }
  .session4 .logo {
    background-image: url(../assets/logo.png);
    background-repeat: no-repeat;
    background-color: yellowgreen;
    width: 308px;
    height: 144px;
    margin: 0 auto;
    text-indent: -9999px;
    margin-bottom: 50px;
  }
  .session4 .content {
    width: 1000px;
    margin: 0 auto;
  }
  .content h2 {
    font-size: 26px;
    margin-bottom: 20px;
    text-align: center;
  }
  .content h3 {
    font-size: 22px;
    margin-bottom: 60px;
    text-align: center;
    font-weight: bold;
  }
  .content p {
    line-height: 25px;
    font-size: 16px;
  }
</style>
