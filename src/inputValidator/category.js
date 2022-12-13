const Yup = require('yup')

const category = Yup.object({
    category: Yup.string(),
})

module.exports = {
  category
}