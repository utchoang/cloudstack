// base library'
import VueCropper from 'vue-cropper'
import componentsUse from '@/core/lazy_lib/components_use'

import 'ant-design-vue/dist/antd.min.css'
import '@/style/vars.less'

// ext library
import VueClipboard from 'vue3-clipboard'
import PermissionHelper from '@/utils/helper/permission'

// customisation
import Spin from 'ant-design-vue/es/spin/Spin'

Spin.setDefaultIndicator({
  indicator: () => {
    return <LoadingOutlined style="font-size: 30px" spin />
  }
})

export const lazyUsePlugs = {
  install: (app) => {
    app.use(VueClipboard, { autoSetContainer: true })
    app.use(PermissionHelper)
    app.use(VueCropper)
    app.use(componentsUse)
  }
}
