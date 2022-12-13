const Yup = require('yup')

const email = Yup.object({
    email: Yup.string().email('Votre email doit avoir un format valide')
  })

module.exports = {
    email
}