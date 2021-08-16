import { ref } from 'vue'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  setup() {

    const month = ref(null)

    return {
      styles,

      month,
    }

  }
}