const Yup = require('yup')

const select = Yup.object({
  select: Yup.string().required('Le champ est requis.'),
})

module.exports = {
  select
}