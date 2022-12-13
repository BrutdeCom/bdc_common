const Yup = require('yup')

const birthdate = Yup.object({
  birthdate: Yup.date(),
})

module.exports = {
  birthdate
}