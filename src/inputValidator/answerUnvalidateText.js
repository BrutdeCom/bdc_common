const Yup = require('yup')

const answerUnvalidateText = Yup.object({
    answerUnvalidateText: Yup.string().required('La texte correspondant à la réponse NON est requis.'),
})

module.exports = {
  answerUnvalidateText
}