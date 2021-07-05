const Yup = require('yup')

const password = Yup.object({
    password: Yup.string().required('TEST Un mot de passe est requis')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_/])([-+!*$@%_\w]{16,})$/,
        'Votre mot de passe doit contenir au moins 16 caractères, une minuscule, une majuscule et un symbole spécial'
      )
  })

module.exports = {
    password
}