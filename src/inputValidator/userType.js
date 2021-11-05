const Yup = require('yup')

const userTypeValidation = Yup.object({
  userType: Yup.string().required('Ce champ est requis.'),
})

module.exports = {
  userType
}
  