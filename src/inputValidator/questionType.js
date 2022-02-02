const Yup = require('yup')

const questionType = Yup.object({
    questionType: Yup.string().required('Le type de la question est requis.'),
})

module.exports = {
  questionType
}