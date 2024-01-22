import * as Yup from 'yup'

export const fax = Yup.object({
  fax: Yup.string().matches(/^((\+)33|0)[1-9](\d{2}){4}$/, 'Votre numéro de fax est incorrect.'),
})