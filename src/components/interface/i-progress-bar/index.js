import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: '#F6C866',
    },
  },
  setup() {

    return {
      styles,
    }

  }
}