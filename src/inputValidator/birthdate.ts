import Yup from 'yup'

export const birthdate = Yup.object({
  birthdate: Yup.date().required('La date de naissance est requise.'),
})