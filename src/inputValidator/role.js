const Yup = require('yup')

export const role = Yup.object({
  role: Yup.string().required('Le rôle est requis.'),
})

module.exports = {
  role
}