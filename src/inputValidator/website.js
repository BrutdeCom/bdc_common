const Yup = require('yup')

const website = Yup.object({
    website: Yup.string().url('Le lien du site web doit avoir un format valide')
  })

module.exports = {
    website
}