<template>
  <div class="Switchlan">
    <a class="switch_btn" @click='changeLanguage("en")' :class='{"on":lan=="en"}'>English</a>
    /
    <a class="switch_btn" @click='changeLanguage("cn")' :class='{"on":lan=="cn"}'>中文</a>
  </div>
</template>

<script>
import Vue from 'vue'
import store from '../vuex.js'

export default {
  name: 'Switchlan',
  data () {
    return {
      msg: 'Switchlan.vue'
    }
  },
  // 使用vuex的store同时控制头尾的语言切换
  computed: {
    lan: function () {
      return store.state.lan
    }
  },
  methods: {
    changeLanguage (type) {
      Vue.config.lang = type
      this.lan = type
      store.commit('increment', type)
      console.log(store.state.lan)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Switchlan {
    position: absolute;
    right: 0;
    top: 10px;
    color: #666;
    font-size: 12px;
  }
  .Switchlan .switch_btn {
    cursor: pointer;
  }
  .Switchlan .switch_btn.on {
    color: #f8b600;
  }
</style>
