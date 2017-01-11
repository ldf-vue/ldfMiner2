<template>
    <div class="about">
      <div class="aboutWrap">
        <h2 class="logo">ldf Miner</h2>

        <div class="aboutContent">
                <p>“Panda”中文译为熊猫，旨在打造以熊猫形象为代表的中国虚拟货币硬件设备品牌制造商。熊猫矿机管理团队由数位芯片、显卡、比特币、互联网及资本运营领域的资深人士构成，具有广阔的全球视野和优秀的战略规划及执行能力。熊猫矿机成立于2016年，总部位于中国深圳，利用优越的地理优势，迅速整合专业人才和生产资源，成功打造数字货币挖矿领域多项核心竞争力，我们更面向全球市场，致力于为数字货币挖矿全产业链持续输送价值。</p>
                <p>熊猫矿机自2016年2月开始研发，10月开始多方面实验，通过总结市场现有显卡挖矿的优势，我们的工程团队全面完善了显卡参数。数千个小时的电脑模拟和精细微调让我们获得了前所未有的低功耗及超高算力。PandaMiner目前已经开始量产，基于自主开发的尖端显卡配置，我们的目标是在不断推动虚拟货币挖矿行业经济增长。</p>
                <p>为了促进在行业内更快速发展，我们同时也热烈欢迎代理小伙伴加入我们。如果你有兴趣帮助我们拓展业务，了解更多关于我们的项目，以及它如何帮助您获得进入工业规模的虚拟币开采业务，请联系我们。</p>
                <div class="contact">
                    <p>联系方式：</p>
                    <p>电话: <em>0755-86707660</em></p>
                    <p>邮箱: <em>official@pandaminer.com</em></p>
                    <p>QQ群: <em>470977519</em></p>
                </div>
            </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'about.vue'
    }
  }
}
</script>

<style scoped>
  .about {
    background-color: #f1f1f3;
  }
  .aboutWrap {
    width: 1100px;
    margin: 0 auto;
    padding-bottom: 60px;
  }
  .aboutWrap .logo {
    width: 268px;
    height: 176px;
    background-image: url(../assets/logo.png);
    background-repeat: no-repeat;
    display: block;
    text-indent: -9999px;
    margin: 0 auto 80px;
  }
  .aboutWrap .aboutContent {
    line-height: 28px;
    width: 800px;
    margin: 0 auto;
  }
</style>
