const Yup = require('yup')

const city = Yup.object({
  city: Yup.string().min(2, 'Le nom de votre ville est trop court.').matches(/^([^0-9]*)$/, 'Votre ville doit contenir seulement des lettres.'),
})

module.exports = {
  city
}