import template from './template'
import styles from './style.module.scss'

import router from '@/router'

import glare from '@/assets/images/glare.png'
import woman from '@/assets/images/woman.png'

export default {
  extends: template,
  setup() {

    /**
     * Handler of answer callback.
     * 
     * @param {Any} answer 
     */
    const answerHandler = answer => {
      router.push('steps')
    }

    return {
      styles,

      glare,
      woman,

      answerHandler,
    }

  }
}