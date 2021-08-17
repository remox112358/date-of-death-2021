import { computed } from 'vue'
import { useStore } from 'vuex'

import step1 from './questions/step1'
import step2 from './questions/step2'
import step3 from './questions/step3'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  components: {
    step1,
    step2,
    step3,
  },
  setup() {

    const store = useStore()

    const step = computed(() => store.getters['steps/step'])

    return {
      styles,

      step,
    }

  }
}