import { ref, watch, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import { sleep } from '@/utils'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    cloud: {
      type: Boolean,
      default: false,
    },
    alternative: {
      type: Boolean,
      default: false,
    },
  },
  setup() {

    /**
     * Global store.
     */
    const store = useStore()
    
    /**
     * Data and states.
     */
    const step = computed(() => store.state.steps.step)
    
    const showStatus      = ref(false)
    const showStatusClass = ref(false)

    /**
     * Calls on mount action.
     */
    onMounted(() => {
      updateShow()
    })

    /**
     * Watcher for step value.
     */
    watch(step, value => {
      updateShow()
    })

    /**
     * Updates the message showStatus.
     */
    const updateShow = async () => {
      if (!showStatus.value) {
        show()
      } else {
        hide(true)
        
        await sleep(1)

        show()
      }
    }

    /**
     * Show action.
     */
    const show = async () => {
      showStatus.value = true
      
      await sleep(100)
        
      showStatusClass.value = true
    }
    
    /**
     * Hide action.
     * 
     * @param {Boolean} withoutDelay 
     */
    const hide = async (withoutDelay = false) => {
      showStatusClass.value = false

      await sleep(withoutDelay ? 0 : 500)

      showStatus.value = false
    }

    return {
      styles,

      showStatus,
      showStatusClass,

      show,
      hide,
    }

  }
}