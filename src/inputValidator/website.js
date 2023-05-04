const Yup = require('yup')

const website = Yup.object({
    website: Yup.string()
  })

module.exports = {
    website
}