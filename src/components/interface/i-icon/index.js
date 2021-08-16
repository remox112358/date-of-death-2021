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

    const xlink = computed(() => `${icons}#${name}`)

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