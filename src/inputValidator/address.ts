import * as Yup from 'yup'

export const address = Yup.object({
  address: Yup.string().min(5, 'Votre adresse est trop courte.'),
})