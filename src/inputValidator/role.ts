import Yup from 'yup'

export const role = Yup.object({
  role: Yup.string().required('Le rôle est requis.'),
})