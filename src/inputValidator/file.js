const Yup = require('yup')

const file = Yup.object().shape({
  file: Yup.mixed()
})

module.exports = {
  file
}