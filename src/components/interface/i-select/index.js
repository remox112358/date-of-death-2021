import { 
  ref, 
  onMounted,
  onUnmounted 
} from 'vue'

import { generateRandomString } from '@/utils.js'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    modelValue: {
      type: Object,
      default: null,
    },
    options: {
      type: Array,
      default: [],
    },
    placeholder: {
      type: String,
      default: 'Выберите',
    }
  },
  setup(props, { emit }) {

    const root = ref(null)
    const toggleStatus = ref(false)
    const componentId = generateRandomString()

    const open = () => toggleStatus.value = true
    const close = () => toggleStatus.value = false
    const toggle = () => toggleStatus.value = !toggleStatus.value

    onMounted(() => {
      document.addEventListener('click', clickHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
    })

    const clickHandler = event => {
      if (toggleStatus.value) {
        const inArea = event.target.closest(`#${componentId}`)

        if (!inArea)
          close()
      }
    }

    const select = option => {
      emit('update:modelValue', option)

      close()
    }

    return {
      styles,

      root,
      componentId,
      toggleStatus,

      open,
      close,
      toggle,
      select,
    }

  }
}