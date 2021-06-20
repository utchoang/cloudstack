<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
import enUS from 'ant-design-vue/lib/locale-provider/en_US'
import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire],
  data () {
    return {
      locale: enUS,
      configs: {}
    }
  },
  created () {
    window.less.modifyVars(this.$config.theme)
    console.log('config and theme applied')
  }
}
</script>
<style>
#app {
  height: 100%;
}
</style>
