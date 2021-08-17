import { useStore } from 'vuex'

import template from './template'

export default {
  extends: template,
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    /**
     * Handler for question callback.
     * 
     * @param {Number} answer 
     */
    const answerHandler = answer => {
      store.commit('steps/setAnswer', answer)
      store.commit('steps/goToNextStep')
    }

    return {
      answerHandler,
    }

  }
}