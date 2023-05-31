const Yup = require('yup')

const password = Yup.object({
    password: Yup.string()
      .matches(
        // /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_/])([-+!*$@%_\w]{8,})$/,
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        'Votre mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un symbole spécial'
      )
  })

module.exports = {
    password
}