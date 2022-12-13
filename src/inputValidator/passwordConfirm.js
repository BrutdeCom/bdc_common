const Yup = require('yup')

const passwordConfirm = Yup.object({
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Le mot de passe doit être identique'),
})

module.exports = {
  passwordConfirm
}