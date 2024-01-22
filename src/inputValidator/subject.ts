import * as Yup from 'yup'

export const subject = Yup.object({
  subject: Yup.string('Le sujet doit être une chaine de caractères').min(4, 'Le sujet est trop court !'),
})