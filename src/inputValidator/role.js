const Yup = require('yup')

const role = Yup.object({
  role: Yup.string(),
})

module.exports = {
  role
}