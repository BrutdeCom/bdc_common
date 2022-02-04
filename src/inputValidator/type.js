const Yup = require('yup')

const type = Yup.object({
    type: Yup.string().required('Le type de la question est requis.'),
})

module.exports = {
  type
}