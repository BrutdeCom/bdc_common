const Yup = require('yup')

const questionIntroSubTheme = Yup.object({
    questionIntroSubTheme: Yup.string(),
})

module.exports = {
  questionIntroSubTheme
}