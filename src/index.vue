<template>
  <a-select
    :virtual="false"
    :value="modelValue"
    :disabled="disabled"
    :showSearch="showSearch"
    :allowClear="allowClear"
    :placeholder="placeholder"
    style="width: 100%;"
    optionFilterProp="label"
    dropdownClassName="s-icon-dropdown-wrapper"
    @change="bindChange"
  >
    <a-select-opt-group
      v-for="group of groups"
      :key="group.key"
      :label="group.title"
    >
      <template #label>
        <span style="font-size: 14px">{{ group.title }}</span>
      </template>

      <a-select-option
        v-for="item of group.children"
        :key="item.key"
        :value="item.value"
        :title="item.label"
        :label="item.label"
      >
        <component
          :is="getComponent(item.value)"
          style="font-size: 18px; vertical-align: middle"
        />
        <span
          class="s-icon-dropdown-hidden"
          style="padding: 0 3px; font-size: 12px; vertical-align: middle"
        >
          {{ item.label }}
        </span>
      </a-select-option>
    </a-select-opt-group>
  </a-select>
</template>

<script lang="ts">
export default {
  name: 'IconSelect'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import * as components from '@ant-design/icons-vue'
import icons from './icons'

export interface EmitChange {
  (type: 'update:modelValue', value: string): void
}

defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  allowClear: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  value: {
    type: String,
    default: undefined
  }
})

const groups = computed(() => {
  return icons.map(group => {
    return {
      key: group.key,
      title: group.title,
      children: group.icons.map(icon => ({
        key: icon,
        label: icon,
        value: icon
      }))
    }
  })
})

const getComponent = (name: string) => {
  const upperCase = name.replaceAll(/(^|-)(\w)/g, (t1, t2, t3) => t3 && t3.toUpperCase())
  return (components as any)[upperCase + 'Outlined']
}

const emitChange = defineEmits<EmitChange>()
const bindChange = emitChange.bind(null, 'update:modelValue')
</script>

<style lang="less">
.s-icon-dropdown-wrapper {
  .rc-virtual-list {
    padding-left: 8px !important;
    margin-bottom: 4px !important;

    .rc-virtual-list-holder-inner {
      display: block !important;
    }

    .ant-select-item-option-grouped {
      padding-left: 0 !important;
    }

    .ant-select-item-option-selected {
      background-color: #b1d6fe;
    }

    .ant-select-item-option {
      margin: 3px 5px !important;
      padding: 5px 7px !important;
      line-height: 18px !important;
      display: inline-block !important;

      .s-icon-dropdown-hidden {
        display: none !important;
      }
    }
  }
}
</style>
