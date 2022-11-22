const Yup = require('yup')

const theme = Yup.object({
    theme: Yup.string(),
})

module.exports = {
  theme
}