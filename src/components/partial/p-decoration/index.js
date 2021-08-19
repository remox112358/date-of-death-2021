import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    icon: {
      type: String,
      default: null,
    },
    htmlClass: {
      type: Object,
      default: {},
    },
  },
  setup({ htmlClass }) {

    /**
     * Data and states.
     */
    const clsx = {
      ...htmlClass,
      [styles.root]: true,
    }

    return {
      styles,

      clsx,
    }

  }
}