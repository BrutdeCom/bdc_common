import * as Yup from 'yup'

export const passwordConfirm = Yup.object({
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Le mot de passe doit être identique'),
})