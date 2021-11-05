const Yup = require('yup')

const fax = Yup.object({
  fax: Yup.string().required('Le numéro de fax est requis.').matches(/^((\+)33|0)[1-9](\d{2}){4}$/, 'Votre numéro de fax est incorrect.'),
})

module.exports = {
  fax
}