<template>
  <div class="Switchlan">
    <a class="switch_btn" @click='changeLanguage("en")' :class='{"on":lan=="en"}'>English</a>
    /
    <a class="switch_btn" @click='changeLanguage("cn")' :class='{"on":lan=="cn"}'>中文</a>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'Switchlan',
  data () {
    return {
      msg: 'Switchlan.vue',
      lan: 'cn'
    }
  },
  methods: {
    changeLanguage (type) {
      Vue.config.lang = type
      this.lan = type
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
    color: #32c057;
  }
</style>
