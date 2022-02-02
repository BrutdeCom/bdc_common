const Yup = require('yup')

const question = Yup.object({
    question: Yup.string().required('La question est requise.'),
})

module.exports = {
  question
}