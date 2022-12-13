const Yup = require('yup')

const accommodationName = Yup.object({
  accommodationName: Yup.string('Le nom doit être une chaine de caractères').min(2, 'Le nom est trop court !'),
})

module.exports = {
  accommodationName
}