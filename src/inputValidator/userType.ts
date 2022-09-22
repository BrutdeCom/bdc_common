import Yup from 'yup'

export const userType = Yup.object({
  userType: Yup.string().required('Ce champ est requis.'),
})
  