import template from './template'
import styles from './style.module.scss'

import SPrediction from './sections/s-prediction'

export default {
  extends: template,
  components: {
    SPrediction,
  },
  setup() {

    return {
      styles,
    }

  }
}