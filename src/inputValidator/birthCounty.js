const Yup = require('yup')

const birthCounty = Yup.object({
  birthCounty: Yup.string(),
})

module.exports = {
  birthCounty
}