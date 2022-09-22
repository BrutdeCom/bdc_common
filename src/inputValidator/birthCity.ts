import Yup from 'yup'

export const birthCity = Yup.object({
  birthCity: Yup.string().required('La commune de naissance est requise.'),
})