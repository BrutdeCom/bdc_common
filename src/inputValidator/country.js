const Yup = require('yup')

const country = Yup.object({
  country: Yup.string().min(2, 'Votre pays est trop court.'),
})

module.exports = {
  country
}