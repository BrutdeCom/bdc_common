import Yup from 'yup'

export const birthCountry = Yup.object({
  birthCountry: Yup.string().required('Le pays de naissance est requis.'),
})