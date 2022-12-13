const Yup = require('yup')

const consent = Yup.object({
  consent: Yup.boolean().required('Le consentement est requis.'),
})

module.exports = {
  consent
}