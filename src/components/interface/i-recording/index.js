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

    /**
     * Data and states.
     */
    const status = computed(() => store.state.recording)
    
    const percent       = ref(0)
    const intervalIndex = ref(null)

    /**
     * Watcher for status value.
     */
    watch(status, value => {
      if (value) {
        intervalIndex.value = setInterval(() => {
          percent.value++
        }, 100)
      }
    })

    /**
     * Watcher for percent value.
     */
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