const Yup = require('yup')

const birthCountry = Yup.object({
  birthCountry: Yup.string(),
})

module.exports = {
  birthCountry
}