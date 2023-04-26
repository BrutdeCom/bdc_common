const Yup = require('yup')

const notes = Yup.object({
  notes: Yup.string('La note doit être une chaine de caractères').min(6, 'Le message est trop court !'),
})

module.exports = {
  notes
}