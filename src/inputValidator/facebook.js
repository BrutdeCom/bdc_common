const Yup = require('yup')

const facebook = Yup.object({
    facebook: Yup.string().url('Votre lien facebook doit avoir un format valide')
  })

module.exports = {
    facebook
}