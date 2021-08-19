import { computed, reactive } from 'vue'

import template from './template'
import styles from './style.module.scss'

import icons from './icons.svg'

export default {
  extends: template,
  props: {
    name: {
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
  setup({ name }) {

    /**
     * xlink for icon.
     */
    const xlink = computed(() => `${icons}#${name}`)

    /**
     * Classes for svg element.
     */
    const clsx = reactive({
      [styles.root]: true,
      [`icon--${name}`]: name,
    })

    return {
      styles,

      clsx,
      xlink,
    }

  }
}