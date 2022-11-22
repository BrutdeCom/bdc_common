const Yup = require('yup')

const subTheme = Yup.object({
    subTheme: Yup.string(),
})

module.exports = {
  subTheme
}