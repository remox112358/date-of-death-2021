import template from './template'
import styles from './style.module.scss'

import SProof from './sections/s-proof'
import SSecret from './sections/s-secret'
import SFooter from './sections/s-footer'
import SPrediction from './sections/s-prediction'

export default {
  extends: template,
  components: {
    SProof,
    SSecret,
    SFooter,
    SPrediction,
  },
  setup() {

    return {
      styles,
    }

  }
}