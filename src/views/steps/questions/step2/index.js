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
      { text: 'Утро', value: 1 },
      { text: 'День', value: 2 },
      { text: 'Вечер', value: 3 },
      { text: 'Ночь', value: 4 },
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