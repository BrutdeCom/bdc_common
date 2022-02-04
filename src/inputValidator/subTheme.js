const Yup = require('yup')

const subTheme = Yup.object({
    subTheme: Yup.string().required('La catégorie de la question est requise.'),
})

module.exports = {
  subTheme
}