const Yup = require('yup')

const company = Yup.object({
  company: Yup.string().required('Le nom de l\'entreprise est requis.'),
})

module.exports = {
  company
}