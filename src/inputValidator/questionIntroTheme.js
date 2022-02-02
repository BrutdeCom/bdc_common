const Yup = require('yup')

const questionIntroTheme = Yup.object({
    questionIntroTheme: Yup.string(),
})

module.exports = {
  questionIntroTheme
}