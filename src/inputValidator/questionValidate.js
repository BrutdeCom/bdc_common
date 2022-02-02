const Yup = require('yup')

const questionValidate = Yup.object({
    questionValidate: Yup.string().required('La texte correspondant à la réponse OUI est requis.'),
})

module.exports = {
  questionValidate
}