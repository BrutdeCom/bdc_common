const Yup = require('yup')

const questionUnvalidate = Yup.object({
    questionUnvalidate: Yup.string().required('La texte correspondant à la réponse NON est requis.'),
})

module.exports = {
  questionUnvalidate
}