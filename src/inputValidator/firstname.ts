import Yup from 'yup'

export const firstname = Yup.object({
  firstname: Yup.string().min(2, 'Votre prénom est trop court !').required('Votre prénom est requis.'),
})