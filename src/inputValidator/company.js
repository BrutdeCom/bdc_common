const Yup = require('yup')

const company = Yup.object({
  company: Yup.string(),
})

module.exports = {
  company
}