const Yup = require('yup')

const firstname = Yup.object({
  firstname: Yup.string('Votre prénom doit être une chaine de caractères.').min(2, 'Votre prénom est trop court !'),
})

module.exports = {
  firstname
}