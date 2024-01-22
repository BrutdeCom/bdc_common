import * as Yup from 'yup'

export const message = Yup.object({
  message: Yup.string('Le message doit être une chaine de caractères').min(8, 'Le message est trop court !'),
})