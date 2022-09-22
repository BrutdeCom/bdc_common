import Yup from 'yup'

export const password = Yup.object({
    password: Yup.string().required('Un mot de passe est requis')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_/])([-+!*$@%_\w]{8,})$/,
        'Votre mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un symbole spécial'
      )
  })