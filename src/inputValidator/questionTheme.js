const Yup = require('yup')

const questionTheme = Yup.object({
    questionTheme: Yup.string().required('Le thème de la question est requise.'),
})

module.exports = {
  questionTheme
}