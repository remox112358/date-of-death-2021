import { createStore } from 'vuex'

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
    // ...
  },

})
