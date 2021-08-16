import template from './template'
import styles from './style.module.scss'

import hands from '@/assets/images/hands.png'

export default {
  extends: template,
  setup() {

    return {
      styles,

      hands,
    }

  }
}