import Yup from 'yup'

export const birthCounty = Yup.object({
  birthCounty: Yup.string().required('Le département de naissance est requis.'),
})