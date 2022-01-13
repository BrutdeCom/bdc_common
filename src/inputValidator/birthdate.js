const Yup = require('yup')

const birthdate = Yup.object({
  birthdate: Yup.date().required('La date de naissance est requise.'),
})

module.exports = {
  birthdate
}