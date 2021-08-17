import { ref, watch, computed } from 'vue'
import { useStore } from 'vuex'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    modelValue: {
      type: Boolean,
      default: true,
    },
  },
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    const percent = ref(0)
    const intervalIndex = ref(null) 
    const status = computed(() => store.state.recording)

    watch(status, value => {
      if (value) {
        intervalIndex.value = setInterval(() => {
          percent.value++
        }, 100)
      }
    })

    watch(percent, value => {
      if (value === 100) {
        clearTimeout(intervalIndex.value)

        store.commit('setRecording', false)
      }
    })

    return {
      styles,

      percent,
    }

  }
}