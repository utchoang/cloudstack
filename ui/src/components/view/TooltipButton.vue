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

<template>
  <a-tooltip arrowPointAtCenter :placement="tooltipPlacement">
    <template v-slot:title v-if="tooltip">
      {{ tooltip }}
    </template>
    <a-button
      v-if="copyResource"
      shape="circle"
      :size="size"
      :type="type"
      :disabled="disabled"
      :class="buttonClass"
      :loading="loading"
      @click="handleClicked()"
      v-clipboard:copy="copyResource" >
      <template #icon><render-icon :icon="icon" /></template>
      <a-icon
        v-if="iconType && iconTwoToneColor"
        :type="iconType"
        theme="twoTone"
        :twoToneColor="iconTwoToneColor" />
    </a-button>
    <a-button
      v-else
      shape="circle"
      :size="size"
      :type="type"
      :disabled="disabled"
      :class="buttonClass"
      :loading="loading"
      @click="handleClicked()" >
      <template #icon><render-icon :icon="icon" /></template>
      <a-icon
        v-if="iconType && iconTwoToneColor"
        :type="iconType"
        theme="twoTone"
        :twoToneColor="iconTwoToneColor" />
    </a-button>
  </a-tooltip>
</template>

<script>
import RenderIcon from '@/utils/renderIcon'

export default {
  name: 'TooltipButton',
  components: { RenderIcon },
  props: {
    tooltip: {
      type: String,
      default: null
    },
    tooltipPlacement: {
      type: String,
      default: 'bottomRight'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: null
    },
    iconType: {
      type: String,
      default: null
    },
    iconTwoToneColor: {
      type: String,
      default: null
    },
    buttonClass: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    copyResource: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClicked () {
      this.$emit('onClick')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
