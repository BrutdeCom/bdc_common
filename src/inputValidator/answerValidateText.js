const Yup = require('yup')

const answerValidateText = Yup.object({
    answerValidateText: Yup.string(),
})

module.exports = {
  answerValidateText
}