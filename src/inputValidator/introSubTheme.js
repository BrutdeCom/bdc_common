const Yup = require('yup')

const introSubTheme = Yup.object({
    introSubTheme: Yup.string(),
})

module.exports = {
  introSubTheme
}