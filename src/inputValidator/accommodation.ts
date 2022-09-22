import Yup from 'yup'

export const accommodation = Yup.object({
  accommodation: Yup.string().required('Le type de logement est requis.'),
})