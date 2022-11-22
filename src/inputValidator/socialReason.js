const Yup = require('yup')

const socialReason = Yup.object({
  socialReason: Yup.string(),
})

module.exports = {
  socialReason
}