import Yup from 'yup'

export const socialReason = Yup.object({
  socialReason: Yup.string().required('La raison sociale est requise.'),
})