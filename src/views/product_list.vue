<template>
    <div class="product_list">
        <div class="pageTitle">
          <h1>{{ $t("subTitle.miners") }}</h1>
        </div>
        <div class="products">
          <ul>
            <li class="productItem" v-for="item in items">
              <img :src="item.src" class="productImg">
              <div class="productInfo">
                  <p class="productName">ldfMiner B1 Plus</p>
                  <p class="productParams">
                    <span class="param">显卡数量：8</span>
                    <span class="param">核心显卡：RX480</span>
                  </p>
              </div>
              <div class="price">
                  <p class="normalPrice">￥15,500.00</p>
                  <p class="BTCPrice">（2.311 BTC）</p>
              </div>
              <router-link :to="{ path: 'product_detail/id=' + item.product_id }" class="btn btnBuy">立即购买</router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'product_list',
  data () {
    return {
      msg: 'product_list.vue',
      items: [
        {
          src: 'static/logo.png',
          product_id: 1
        },
        {
          src: 'static/logo.png',
          product_id: 2
        }
      ]
    }
  }
}
</script>

<style>
  .product_list {
    width: 1100px;
    margin: 0 auto;
  }
  .pageTitle {
    font-size: 26px;
    padding: 25px 0;
  }
  .products ul {
    border: 1px solid #e5e5e5;
    border-bottom: none;
  }
  .products .productItem {
    border-bottom: 1px solid #e5e5e5;
    min-height: 150px;
    position: relative;
    padding-left: 250px;
    padding-top: 90px;
  }
  .products .productImg {
    width: 180px;
    height: 180px;
    position: absolute;
    left: 40px;
    top: 30px;
  }
  .products .productInfo {
    width: 480px;
  }
  .products .productName {
    font-size: 26px;
    color: #333;
    margin-bottom: 10px;
  }
  .products .productParams {
    color: #666;
  }
  .price {
    text-align: right;
    position: absolute;
    top: 90px;
    right: 230px;
  }
  .price .normalPrice {
    font-size: 26px;
  }
  .price .BTCPrice {
    font-size: 14px;
    color: #999;
  }
  .btn {
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    padding: 0 10px;
    font-size: 16px;
    border-radius: 4px;
    text-align: center;
    background-color: #32c057;
    border: 1px solid #32c057;
    color: #fff;
  }
  .btnBuy {
    position: absolute;
    right: 30px;
    top: 95px;
    width: 160px;
  }
</style>
