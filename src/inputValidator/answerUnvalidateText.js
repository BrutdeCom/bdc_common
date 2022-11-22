const Yup = require('yup')

const answerUnvalidateText = Yup.object({
    answerUnvalidateText: Yup.string(),
})

module.exports = {
  answerUnvalidateText
}