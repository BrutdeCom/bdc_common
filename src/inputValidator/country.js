const Yup = require('yup')

const country = Yup.object({
  country: Yup.string().required('Le pays est requis.').min(2, 'Votre pays est trop court.'),
})

module.exports = {
  country
}