const Yup = require('yup')

const questionId = Yup.object({
    questionId: Yup.string().required('L\'id de la question est requis'),
})

module.exports = {
  questionId
}