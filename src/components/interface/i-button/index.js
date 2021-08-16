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
      default: '310px',
    },
    height: {
      type: String,
      default: '70px',
    }
  },
  setup({ href }) {

    const tag = href ? 'a' : 'button'

    return {
      styles,

      tag,
    }

  }
}