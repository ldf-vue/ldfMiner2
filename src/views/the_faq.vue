<template>
    <div class="the_faq">
       <div class="faqWrap">
        <h2 class="pageTitle">FAQ</h2>

        <h3 class="subTitle">支付问题</h3>
        <div class="questionItem">
          <p class="question">问：你们接受什么样的付款方式？</p>
          <p class="answer">答：我们接受比特币支付以及人民币银行转账（仅限中国地区）。我们的机器以人民币定价出售，折算实时比特币价格。</p>
        </div>


        <h3 class="subTitle">发货问题</h3>
        <div class="questionItem">
          <p class="question">问：你们接受什么样的付款方式？</p>
          <p class="answer">答：我们接受比特币支付以及人民币银行转账（仅限中国地区）。我们的机器以人民币定价出售，折算实时比特币价格。</p>
        </div>


        <h3 class="subTitle">退款退货</h3>
        <div class="questionItem">
          <p class="question">问：你们接受什么样的付款方式？</p>
          <p class="answer">答：我们接受比特币支付以及人民币银行转账（仅限中国地区）。我们的机器以人民币定价出售，折算实时比特币价格。</p>
        </div>
          
        <h3 class="subTitle">售后维修和其他</h3>
       </div>
    </div>
</template>

<script>
export default {
  name: 'the_faq',
  data () {
    return {
      msg: 'the_faq.vue'
    }
  }
}
</script>

<style scoped>
  .the_faq {
    background-color: #f1f1f3;
  }
  .faqWrap {
    width: 1100px;
    margin: 0 auto;
  }
  .faqWrap .pageTitle {
    font-size: 26px;
    padding: 25px 0;
  }
  .faqWrap .subTitle {
    font-size: 18px;
    margin-bottom: 25px;
    padding-top: 15px;
  }
  .faqWrap .questionItem {
    margin-bottom: 20px;
  }
  .faqWrap p {
    line-height: 24px;
  }

</style>
