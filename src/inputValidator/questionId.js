const Yup = require('yup')

const questionId = Yup.object({
    questionId: Yup.string(),
})

module.exports = {
  questionId
}