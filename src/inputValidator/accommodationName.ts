import Yup from 'yup'

export const accommodationName = Yup.object({
  accommodationName: Yup.string().required('Le nom est requis.').min(2, 'Le nom est trop court !'),
})