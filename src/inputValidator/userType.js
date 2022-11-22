const Yup = require('yup')

const userType = Yup.object({
  userType: Yup.string(),
})

module.exports = {
  userType
}
  