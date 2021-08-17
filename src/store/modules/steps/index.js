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
    },

    /**
     * Returns age of person.
     * 
     * @param {Object} state 
     * @returns {Number}
     */
    age: state => {
      const { day, month, year } = state.answers[2]
      
      const currentDate = new Date()
      const birthdate = new Date(`${year}/${month}/${day}`)

      return Math.floor((currentDate - birthdate) / 31557600000)
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