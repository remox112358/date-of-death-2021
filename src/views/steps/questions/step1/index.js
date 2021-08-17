import { computed } from 'vue'
import { useStore } from 'vuex'

import template from './template'

export default {
  extends: template,
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    const variants = [
      { text: 'Да', value: 1 },
      { text: 'Нет', value: 0 },
    ]

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
      variants,
      answerHandler,
    }

  }
}