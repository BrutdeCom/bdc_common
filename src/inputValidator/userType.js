const Yup = require('yup')

const userType = Yup.object({
  userType: Yup.string().required('Ce champ est requis.'),
})

module.exports = {
  userType
}
  