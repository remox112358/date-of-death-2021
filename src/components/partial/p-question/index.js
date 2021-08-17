import { ref, watch } from 'vue'
import { useForm, useField } from 'vee-validate'

import schemas from '@/config/schemas'

import { 
  getDaysOptions,
  getMonthsOptions,
  getYearsOptions,
  dayExistInMonth
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
  setup({ callback }) {

    const dayOptions = ref(getDaysOptions())
    const monthOptions = getMonthsOptions()
    const yearOptions = getYearsOptions()

    /**
     * Validation schema. 
     */
    const schema = schemas.birthdate

    /**
     * Form context. 
     */
    const { meta, setErrors, resetForm } = useForm({
      validationSchema: schema,
    })

    /**
     * Form fields. 
     */
    const {
      value: day,
      meta: dayMeta
    } = useField('day')

    const {
      value: month,
      meta: monthMeta
    } = useField('month')

    const {
      value: year,
      meta: yearMeta
    } = useField('year')

    /**
     * Watcher for month value.
     */
    watch(month, value => {
      if (year.value) {
        dayOptions.value = getDaysOptions(month.value, value)

        if (day.value && !dayExistInMonth(day.value, value, year.value))
          day.value = null
      }
    })

    /**
     * Watcher for year value.
     */
    watch(year, value => {
      if (month.value) {
        dayOptions.value = getDaysOptions(month.value, value)

        if (day.value && !dayExistInMonth(day.value, month.value, value))
          day.value = null
      }
    })

    /**
     * Handler of birthdate select.
     */
    const birthdateHandler = () => {
      validateEmptyFields()

      if (!meta.value.valid) return

      callback({
        day: day.value,
        year: year.value,
        month: month.value,
      })
    }
    
    /**
     * Validates empty fields.
     */
    const validateEmptyFields = () => {
      dayMeta.validated = true
      monthMeta.validated = true
      yearMeta.validated = true
    }

    return {
      styles,

      day,
      dayMeta,
      dayOptions,

      year,
      yearMeta,
      yearOptions,

      month,
      monthMeta,
      monthOptions,

      birthdateHandler,
    }

  }
}