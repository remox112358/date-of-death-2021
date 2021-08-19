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

    const store = useStore()

    const showStatus      = ref(false)
    const showStatusClass = ref(false)

    const step = computed(() => store.state.steps.step)

    onMounted(() => {
      updateShow()
    })

    watch(step, value => {
      updateShow()
    })

    const updateShow = async () => {
      if (!showStatus.value) {
        show()
      } else {
        hide(true)
        
        await sleep(1)

        show()
      }
    }

    const show = async () => {
      showStatus.value = true
      
      await sleep(100)
        
      showStatusClass.value = true
    }
    
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