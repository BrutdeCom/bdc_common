import * as Yup from 'yup'

export const birthdate = Yup.object({
  birthdate: Yup.date(),
})