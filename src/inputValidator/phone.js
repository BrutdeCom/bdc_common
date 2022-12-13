const Yup = require('yup')

const phone = Yup.object({
  phone: Yup.string().matches(/^((\+)33|0)[1-9](\d{2}){4}$/, 'Votre numéro de téléphone est incorrect.'),
})

module.exports = {
  phone
}