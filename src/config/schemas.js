import * as Yup from 'yup'

export default {
  birthdate: {
    day: Yup.number().required(),
    year: Yup.number().required(),
    month: Yup.number().required(),
  }
}