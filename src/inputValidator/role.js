const Yup = require('yup')

const role = Yup.object({
  role: Yup.string().required('Le rôle est requis.'),
})

module.exports = {
  role
}