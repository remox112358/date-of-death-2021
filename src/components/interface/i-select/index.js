import { 
  ref, 
  watch,
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
      type: [String, Number],
      default: null,
    },
    options: {
      type: Array,
      default: [],
    },
    placeholder: {
      type: String,
      default: 'Выберите',
    },
    invalid: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {

    /**
     * Data and states.
     */
    const root         = ref(null)
    const selected     = ref(null)
    const toggleStatus = ref(false)
    
    const componentId = generateRandomString()

    /**
     * Dropdown open action.
     */
    const open = () => toggleStatus.value = true
    
    /**
     * Dropdown close action.
     */
    const close = () => toggleStatus.value = false
    
    /**
     * Dropdown toggle action.
     */
    const toggle = () => toggleStatus.value = !toggleStatus.value

    /**
     * Calls on component mount action.
     */
    onMounted(() => {
      document.addEventListener('click', clickHandler)
    })

    /**
     * Calls on component unmount action.
     */
    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
    })

    /**
     * Handler of click event.
     * 
     * @param {Object} event 
     */
    const clickHandler = event => {
      if (toggleStatus.value) {
        const inArea = event.target.closest(`#${componentId}`)

        if (!inArea)
          close()
      }
    }

    /**
     * Handler for select action.
     * 
     * @param {Object} option 
     */
    const select = option => {
      emit('update:modelValue', option.value)
      
      selected.value = option.text

      close()
    }

    return {
      styles,

      root,
      selected,
      componentId,
      toggleStatus,

      open,
      close,
      toggle,
      select,
    }

  }
}