const Yup = require('yup')

const introTheme = Yup.object({
    introTheme: Yup.string(),
})

module.exports = {
  introTheme
}