import { createStore } from 'vuex'

import steps from './modules/steps'

export default createStore({

  state: () => ({
    loading: false,
  }),

  mutations: {
    
    /**
     * Loading status mutation.
     * 
     * @param {Object} state 
     * @param {Boolean} payload 
     */
    setLoading: (state, payload) => {
      state.loading = payload
    },

  },

  actions: {
    // ...
  },

  modules: {
    steps,
  },

})
