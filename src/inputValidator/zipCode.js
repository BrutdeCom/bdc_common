const Yup = require('yup')

export const zipCode = Yup.object({
  zipCode: Yup.string().required('Le code postal est requis.').min(5, 'Votre code postal est trop court.').max(5, 'Votre code postal est trop long.').matches(/^[0-9]*$/, 'Le code postal ne doit pas contenir de lettres.'),
})

module.exports = {
  zipCode
}