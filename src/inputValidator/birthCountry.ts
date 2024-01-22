import * as Yup from 'yup'

export const birthCountry = Yup.object({
  birthCountry: Yup.string(),
})