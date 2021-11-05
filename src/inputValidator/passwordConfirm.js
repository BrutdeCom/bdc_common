const Yup = require('yup')

const passwordConfirm = Yup.object({
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Le mot de passe doit être identique').required('La confirmation de mot de passe est requise.'),
})

module.exports = {
  passwordConfirm
}