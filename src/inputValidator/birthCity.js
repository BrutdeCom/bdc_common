const Yup = require('yup')

const birthCity = Yup.object({
  birthCity: Yup.string().required('La commune de naissance est requise.'),
})

module.exports = {
  birthCity
}