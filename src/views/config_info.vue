<template>
    <div class="config_info">
      <div class="configWrap">
        <div class="pageTitle">
          <h1>{{ $t("subTitle.instructions") }}</h1>
        </div>
        
        <div class="configInstruction">

          <h2 class="sectionTitle">如图为显卡矿机对应插口：</h2>
          <img src="../assets/img/configInstructionPic.png" height="260" width="1010">
          <ul class="portsInstruct">
              <li class="portsInstructItem portsInstructItem_left">
                  <p class="portsView">左侧视图</p>
                  <div class="portsInfo">
                      <p>PIN口：连接电源，供电</p>
                  </div>
              </li>
              <li class="portsInstructItem portsInstructItem_right">
                  <p class="portsView">右侧视图</p>
                  <div class="portsInfo">
                      <p>HDMI 1接口：显卡HDMI</p>
                      <p>网口：网线插口，连接网络</p>
                      <p>HDMI 2接口：主板HDMI</p>
                      <p>指示灯：显卡工作状况指示灯</p>
                      <p>USB接口：相关文件传送</p>
                      <p>开关：显卡矿机开关处</p>
                  </div>
              </li>
          </ul>

          <h2 class="sectionTitle">操作指导：</h2>
          <div class="steps">
            <p v-for="step in steps">
              {{ step.info }}
            </p>
          </div>
          
          <h3 class="subTitle">以太币（ETH）</h3>
          <div class="ETH">
            <p v-for="step in steps">
              {{ step.info }}
            </p>
          </div>


          <h3 class="subTitle">ZEC</h3>
          <div class="ZEC">
            <p v-for="step in steps">
              {{ step.info }}
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'config_info',
  data () {
    return {
      msg: 'config_info.vue',
      steps: [
        { info: '1.从包装盒中取出矿机（对于未购买电源的用户需自行配备电源）' },
        { info: '2.从包装盒中取出矿机（对于未购买电源的用户需自行配备电源）' },
        { info: '3.从包装盒中取出矿机（对于未购买电源的用户需自行配备电源）' },
        { info: '4.从包装盒中取出矿机（对于未购买电源的用户需自行配备电源）' }
      ]
    }
  }
}
</script>

<style scoped>
  .config_info {
    background-color: #f1f1f3;
  }
  .configWrap {
    width: 1100px;
    margin: 0 auto;
    padding-bottom: 60px;
  }
  .pageTitle {
    font-size: 26px;
    padding: 25px 0;
  }

  .configInstruction {
    border: 1px solid #e5e5e5;
    background-color: #FFF;
    padding: 30px 40px;
    color: #666;
    line-height: 24px;
    font-size: 14px;
  }
  .sectionTitle {
    font-size: 20px;
    color: #333;
    margin-bottom: 15px;
  }
  .portsInstruct {
    overflow: hidden;
    padding-bottom: 50px;
  }
  .portsInstructItem {
    float: left;
    width: 50%;
  }
  .portsInstructItem .portsView {
    font-size: 18px;
    text-align: center;
  }
  .portsInfo {
    margin-top: 20px;
    padding-left: 150px;
  }
  .portsInstructItem_right .portsInfo {
    padding-left: 40px;
    overflow: hidden;
  }
  .portsInstructItem_right .portsInfo p {
    float: left;
    width: 230px;
  }
  .configInstruction .subTitle {
    margin: 35px 0 15px;
    font-size: 16px;
    color: #333;
  }
</style>
