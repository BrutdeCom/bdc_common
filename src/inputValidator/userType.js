const Yup = require('yup')

export const userTypeValidation = Yup.object({
  userType: Yup.string().required('Ce champ est requis.'),
})

module.exports = {
  userType
}
  