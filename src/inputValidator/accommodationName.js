const Yup = require('yup')

const accommodationName = Yup.object({
  accommodationName: Yup.string('Le nom doit être une chaine de caractères').required('Le nom est requis.').min(2, 'Le nom est trop court !'),
})

module.exports = {
  accommodationName
}