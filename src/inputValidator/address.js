const Yup = require('yup')

const address = Yup.object({
  address: Yup.string().min(5, 'Votre adresse est trop courte.'),
})

module.exports = {
  address
}