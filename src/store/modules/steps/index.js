export default {
  namespaced: true,

  state: () => ({
    step: 1,
    answers: [
      // ...
    ],
  }),

  getters: {

    /**
     * Returns current step.
     * 
     * @param {Object} state 
     * @returns {Number}
     */
    step: state => {
      return state.step
    }

  },

  mutations: {

    /**
     * Goes to next step/question.
     * 
     * @param {Object} state 
     */
    goToNextStep: state => {
      state.step++
    },

    /**
     * Sets the answer.
     * 
     * @param {Object} state 
     * @param {Any} payload 
     */
    setAnswer: (state, payload) => {
      state.answers = [...state.answers, payload]
    }

  },

  actions: {
    // ...
  },
}