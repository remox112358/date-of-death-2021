import { useStore } from 'vuex'

import router from '@/router'

import questions from '@/views/steps/questions.json'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Data and states.
     */
    const stepData = questions[0]

    /**
     * Handler of answer callback.
     * 
     * @param {Any} answer 
     */
    const answerHandler = answer => {
      router.push('steps')

      store.commit('steps/setAnswer', answer)
      store.commit('steps/goToNextStep')
    }

    return {
      styles,

      stepData,
      answerHandler,
    }

  }
}