const Yup = require('yup')

const file = Yup.object().shape({
  file: Yup.mixed().required('File is required')
})

module.exports = {
  file
}