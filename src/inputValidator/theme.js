const Yup = require('yup')

const theme = Yup.object({
    theme: Yup.string().required('Le thème de la question est requise.'),
})

module.exports = {
  theme
}