import { ref } from 'vue'

import { 
  getDaysOptions,
  getMonthsOptions,
  getYearsOptions
} from '../../../utils'

import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    title: {
      type: String,
      default: null,
    },
    variants: {
      type: Array,
      default: [],
    },
    callback: {
      type: Function,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
    full: {
      type: Boolean,
      default: null,
    },
    mode: {
      type: String,
      default: 'default',
    },
  },
  setup() {

    const day   = ref({})
    const year  = ref({})
    const month = ref({})

    const dayOptions = getDaysOptions(8, 2021)
    const monthOptions = getMonthsOptions()
    const yearOptions = getYearsOptions()

    const birthdateHandler = () => {
      console.log('birthdate handler')
    }

    return {
      styles,

      day,
      year,
      month,
      dayOptions,
      yearOptions,
      monthOptions,

      birthdateHandler,
    }

  }
}