import * as Yup from 'yup'

export const phoneOne = Yup.object({
  phoneOne: Yup.string().matches(/^((\+)33|0)[1-9](\d{2}){4}$/, 'Le numéro de téléphone est incorrect.'),
})