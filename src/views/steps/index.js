import { 
  ref,
  watch, 
  computed, 
} from 'vue'

import { useStore } from 'vuex'

import questions from './questions.json'
import messages from './messages.json'

import { sleep, getTomorrowDate } from '@/utils'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  setup() {

    /**
     * Global store.
     */
    const store = useStore()

    const message = ref(null)
    const tomorrow = getTomorrowDate()
    const age = computed(() => store.getters['steps/age'])
    const step = computed(() => store.getters['steps/step'])
    const stepData = computed(() => questions[step.value - 1])

    /**
     * Watcher for step value.
     */
    watch(step, value => {
      if (value === 5) {
        if (age.value <= 35)
          message.value = messages[0]
        else if (age.value <= 45)
          message.value = messages[1]
        else
          message.value = messages[2]
      }

      if (value === 6) {
        message.value = messages[3]
      }
    })
    
    const answerHandler = async answer => {
      if (step.value === 3) {
        store.commit('setLoading', true)

        await sleep(2000)
          
        store.commit('setLoading', false)
      }

      if (step.value === 5) {
        store.commit('setRecording', true)
      }

      store.commit('steps/setAnswer', answer)
      store.commit('steps/goToNextStep')
    }

    return {
      styles,

      step,
      message,
      stepData,
      tomorrow,

      answerHandler,
    }

  }
}