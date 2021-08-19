import template from './template'
import styles from './style.module.scss'

export default {
  extends: template,
  props: {
    href: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    }
  },
  setup({ href }) {

    /**
     * Determine the tag of component.
     */
    const tag = href ? 'a' : 'button'

    return {
      styles,

      tag,
    }

  }
}