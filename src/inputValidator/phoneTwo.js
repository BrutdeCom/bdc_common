const Yup = require('yup')

const phoneTwo = Yup.object({
  phoneTwo: Yup.string().matches(/^((\+)33|0)[1-9](\d{2}){4}$/, 'Le numéro de téléphone est incorrect.'),
})

module.exports = {
  phoneTwo
}