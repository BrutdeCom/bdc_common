const Yup = require('yup')

const birthCounty = Yup.object({
  birthCounty: Yup.string().required('Le département de naissance est requis.'),
})

module.exports = {
  birthCounty
}