import * as Yup from 'yup'

export const lastname = Yup.object({
    lastname: Yup.string('Votre nom doit être une chaine de caractères.').min(2, 'Votre nom est trop court !'),
})