import * as Yup from 'yup'

export const firstname = Yup.object({
  firstname: Yup.string('Votre prénom doit être une chaine de caractères.').min(2, 'Votre prénom est trop court !'),
})