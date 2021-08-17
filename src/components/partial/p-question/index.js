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
    subtitle: {
      type: String,
      default: null,
    },
    full: {
      type: Boolean,
      default: null,
    },
  },
  setup() {

    return {
      styles,
    }

  }
}