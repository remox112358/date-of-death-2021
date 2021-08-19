import axios from 'axios'

import appConfig from '@/config/app'

export default {
  namespaced: true,

  state: () => ({
    step: 1,
    data: null,
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
    },

    /**
     * Sets the data.
     * 
     * @param {Object} state 
     * @param {Any} payload 
     */
    setData: (state, payload) => {
      state.data = payload
    }

  },

  actions: {
    
    /**
     * Data fetching action.
     * 
     * @param {Object} context
     */
    fetch: context => {
      return new Promise((resolve, reject) => {
        context.commit('setLoading', true, { root: true })

        axios
          .get(appConfig.api)
          .then(response => {
            context.commit('setData', response.data)

            resolve()
          })
          .catch(error => {
            reject()
          })
          .finally(() => {
            context.commit('setLoading', false, { root: true })
          })
      })
    }

  },
}