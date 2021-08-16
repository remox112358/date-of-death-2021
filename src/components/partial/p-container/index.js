import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    nopadding: {
      type: Boolean,
      default: false,
    },
  },
  setup() {

    return {
      styles,
    }

  }
}