import * as Yup from 'yup'

export const email = Yup.object({
    email: Yup.string().email('Votre email doit avoir un format valide')
  })