import template from './template'
import styles from './style.module.scss'

import glare from '@/assets/images/glare.png'
import woman from '@/assets/images/woman.png'

export default {
  extends: template,
  setup() {

    return {
      styles,

      glare,
      woman,
    }

  }
}