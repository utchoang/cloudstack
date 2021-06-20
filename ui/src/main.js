import { createApp } from 'vue'
import StoragePlugin from 'vue-web-storage'

import bootstrap from './core/bootstrap'
import { lazyUsePlugs } from './core/lazy_use'
import permission from './permission' // permission control
import './utils/filter' // global filter

import App from './App.vue'
import router from './router'
import store from './store'
import { i18n, loadLanguageAsync } from './locales'
import { pollJobPlugin, notifierPlugin, toLocaleDatePlugin, configUtilPlugin } from './utils/plugins'
import { VueAxios } from './utils/request'
import setting from '@/config/settings'

const app = createApp(App)
app.config.productionTip = false

fetch('config.json').then(response => response.json()).then(config => {
  app.config.globalProperties.$config = config
  app.use(StoragePlugin, setting.storageOptions)
  // set global localstorage for using
  window.ls = app.config.globalProperties.$localStorage

  loadLanguageAsync().then(() => {
    app.use(store)
      .use(router)
      .use(i18n)
      .use(VueAxios, router)
      .use(lazyUsePlugs)
      .use(permission)
      .use(pollJobPlugin)
      .use(notifierPlugin)
      .use(toLocaleDatePlugin)
      .use(configUtilPlugin)
      .use(bootstrap)
      .mount('#app')

    app.config.globalProperties.axios.defaults.baseURL = config.apiBase
  })
})
