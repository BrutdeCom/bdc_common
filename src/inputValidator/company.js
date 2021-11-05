const Yup = require('yup')

const company = Yup.object({
  company: Yup.string().required('Le type de compagnie est requis.'),
})

module.exports = {
  company
}