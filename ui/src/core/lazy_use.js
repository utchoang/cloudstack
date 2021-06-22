// base library'
import VueCropper from 'vue-cropper'
import componentsUse from '@/core/lazy_lib/components_use'
import iconsUse from '@/core/lazy_lib/icons_use'

import 'ant-design-vue/dist/antd.min.css'
import '@/style/vars.less'

// ext library
import VueClipboard from 'vue3-clipboard'
import PermissionHelper from '@/utils/helper/permission'

// customisation
import { Spin } from 'ant-design-vue'

Spin.setDefaultIndicator({
  indicator: () => {
    return <LoadingOutlined style="font-size: 30px" spin />
  }
})

export default {
  install: (app) => {
    app.use(VueClipboard, { autoSetContainer: true })
    app.use(PermissionHelper)
    app.use(VueCropper)
    app.use(componentsUse)
    app.use(iconsUse)
  }
}
