import Yup from 'yup'

export const phone = Yup.object({
  phone: Yup.string().required('Le numéro de téléphone est requis.').matches(/^((\+)33|0)[1-9](\d{2}){4}$/, 'Votre numéro de téléphone est incorrect.'),
})