import { useStore } from 'vuex'

import router from '@/router'

import questions from '@/views/steps/questions.json'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  setup() {

    const store = useStore()

    const stepData = questions[0]

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