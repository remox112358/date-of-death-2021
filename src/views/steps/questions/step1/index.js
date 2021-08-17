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

    /**
     * Handler for question callback.
     * 
     * @param {Number} answer 
     */
    const answerHandler = answer => {
      console.log(answer)
    }

    return {
      answerHandler,
    }

  }
}