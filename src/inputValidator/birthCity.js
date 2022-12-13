const Yup = require('yup')

const birthCity = Yup.object({
  birthCity: Yup.string(),
})

module.exports = {
  birthCity
}