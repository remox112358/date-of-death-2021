import template from './template'
import styles from './style.module.scss'

import SSecret from './sections/s-secret'
import SPrediction from './sections/s-prediction'

export default {
  extends: template,
  components: {
    SSecret,
    SPrediction,
  },
  setup() {

    return {
      styles,
    }

  }
}