import { createStore } from 'vuex'

import steps from './modules/steps'

export default createStore({

  state: () => ({
    loading: false,
    recording: false,
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

    /**
     * Recording status mutation.
     * 
     * @param {Object} state 
     * @param {Boolean} payload 
     */
    setRecording: (state, payload) => {
      state.recording = payload
    },

  },

  actions: {
    // ...
  },

  modules: {
    steps,
  },

})
