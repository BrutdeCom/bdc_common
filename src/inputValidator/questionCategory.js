const Yup = require('yup')

const questionCategory = Yup.object({
    questionCategory: Yup.string().required('La catégorie de la question est requise.'),
})

module.exports = {
  questionCategory
}