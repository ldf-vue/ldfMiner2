<template>
    <div class="product_list">
        <div class="pageTitle">
          <h1>{{ $t("subTitle.miners") }}</h1>
        </div>
        <div class="products">
          <ul>
            <li class="productItem" v-for="item in items">
              <img :src="item.pics[0]" class="productImg">
              <div class="productInfo">
                  <p class="productName">{{item.title[index]}}</p>
                  <p class="productParams">
                    <span class="param">{{item.keywords[index]}}</span>
                  </p>
              </div>
              <div class="price">
                  <p class="normalPrice">￥{{item.prices[0].price[0]}}</p>
              </div>
              <router-link :to="{ path: 'product_detail/' + item._id }" class="btn btnBuy">{{ $t("product_list.buy") }}</router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import { locales } from '../assets/js/lan-packs.js'

locales.en.product_list = {
  buy: 'Buy Now'
}
locales.cn.product_list = {
  buy: '立即购买'
}

export default {
  name: 'product_list',
  mounted: function () {
    this.$http({
      method: 'GET',
      url: 'http://www.lingyun.party/app1/getLists'
    }).then(function (response) {
      this.items = response.body
    }, function (response) {
      console.log(111111111)
    })
    if (this.$lang === 'cn') {
      this.index = 0
    } else {
      this.index = 1
    }
  },
  data () {
    return {
      index: 0,
      items: []
    }
  },
  watch: {
    $lang: function () {
      if (this.$lang === 'cn') {
        this.index = 0
      } else {
        this.index = 1
      }
    }
  }
}
</script>

<style>
  .product_list {
    width: 1100px;
    margin: 0 auto;
    padding-bottom: 60px
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
    line-height: 70px
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
    background-color: #f8b600;
    border: 1px solid #f8b600;
    color: #fff;
  }
  .btnBuy {
    position: absolute;
    right: 30px;
    top: 105px;
    width: 160px;
  }
</style>
