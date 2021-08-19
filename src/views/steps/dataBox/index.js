import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  setup() {

    return {
      styles,
    }

  }
}