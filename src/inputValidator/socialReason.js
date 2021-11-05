const Yup = require('yup')

const socialReason = Yup.object({
  socialReason: Yup.string().required('La raison sociale est requise.'),
})

module.exports = {
  socialReason
}