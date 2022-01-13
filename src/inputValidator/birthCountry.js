const Yup = require('yup')

const birthCountry = Yup.object({
  birthCountry: Yup.string().required('Le pays de naissance est requis.'),
})

module.exports = {
  birthCountry
}