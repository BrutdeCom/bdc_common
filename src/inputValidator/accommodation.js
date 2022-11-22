const Yup = require('yup')

const accommodation = Yup.object({
  accommodation: Yup.string(),
})

module.exports = {
  accommodation
}