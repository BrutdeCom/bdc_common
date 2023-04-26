const Yup = require('yup')

const linkedin = Yup.object({
    linkedin: Yup.string().url('Votre lien linkedin doit avoir un format valide')
  })

module.exports = {
    linkedin
}