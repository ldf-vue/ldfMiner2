<template>
  <div class="Switchlan">
    <p>{{ $t("message.hello") }}</p>
    <button class="button" @click='changeLanguage("en")'>English</button>
    <button class="button" @click='changeLanguage("cn")'>中文</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueI18n from 'vue-i18n'

// ready translated locales
var locales = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  cn: {
    message: {
      hello: '你好世界'
    }
  }
}
// install plugin
Vue.use(VueI18n)
// set lang
Vue.config.lang = 'cn'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

export default {
  name: 'Switchlan',
  data () {
    return {
      msg: 'Switchlan.vue'
    }
  },
  methods: {
    changeLanguage (type) {
      Vue.config.lang = type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Switchlan {
    position: absolute;
    right: 10px;
    top: 20px;
  }
</style>
