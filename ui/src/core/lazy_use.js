// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

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
