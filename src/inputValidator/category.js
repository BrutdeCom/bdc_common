const Yup = require('yup')

const category = Yup.object({
    category: Yup.string().required('La catégorie de la question est requise.'),
})

module.exports = {
  category
}