const Yup = require('yup')

// TODO: Improve ?
const capeb = Yup.object({
  capeb: Yup.string().required('Votre numéro de CAPEB est requis.').matches(/^[0-9]*$/, 'Le numéro de CAPEB ne doit pas contenir de lettres.'),
})

module.exports = {
  capeb
}