const Yup = require('yup')

const questionSubTheme = Yup.object({
    questionSubTheme: Yup.string().required('La catégorie de la question est requise.'),
})

module.exports = {
  questionSubTheme
}