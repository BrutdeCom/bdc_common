const Yup = require('yup')

const question = Yup.object({
    question: Yup.string(),
})

module.exports = {
  question
}