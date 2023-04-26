const Yup = require('yup')

const instagram = Yup.object({
    instagram: Yup.string().url('Votre lien instagram doit avoir un format valide')
  })

module.exports = {
    instagram
}