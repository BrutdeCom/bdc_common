const Yup = require('yup')

export const accommodation = Yup.object({
  accommodation: Yup.string().required('Le type de logement est requis.'),
})

module.exports = {
  accommodation
}