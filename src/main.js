import { createApp } from 'vue'

import App from './App.vue'

import store from './store'
import router from './router'

import IComponents from './components/interface/autoload.js'

/**
 * App initialization.
 */
const app = createApp(App)

/**
 * Interface components.
 */
Object.keys(IComponents).forEach(name => {
  app.component(name, IComponents[name])
})

/**
 * App configuration setup.
 */
app.use(store)
app.use(router)

/**
 * App mount.
 */
app.mount('#app')
