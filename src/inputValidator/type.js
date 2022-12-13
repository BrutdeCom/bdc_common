const Yup = require('yup')

const type = Yup.object({
    type: Yup.string(),
})

module.exports = {
  type
}