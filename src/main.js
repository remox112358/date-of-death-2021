import { createApp } from 'vue'

import App from './App.vue'

import store from './store'
import router from './router'

import AOS from "aos"
import "aos/dist/aos.css"

import PComponents from './components/partial/autoload.js'
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
 * Partial components.
 */
Object.keys(PComponents).forEach(name => {
  app.component(name, PComponents[name])
})

/**
 * App configuration setup.
 */
app.use(store)
app.use(router)
app.AOS = new AOS.init()

/**
 * App mount.
 */
app.mount('#app')
