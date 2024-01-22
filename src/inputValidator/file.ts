import * as Yup from 'yup'

export const file = Yup.object().shape({
  file: Yup.mixed()
})