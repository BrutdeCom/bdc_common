const Yup = require('yup')

export const address = Yup.object({
  address: Yup.string().required('L\'adresse est requise.').min(5, 'Votre adresse est trop courte.'),
})

module.exports = {
  address
}