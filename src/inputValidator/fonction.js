const Yup = require('yup')

const fonction = Yup.object({
    fonction: Yup.string(),
})

module.exports = {
  fonction
}