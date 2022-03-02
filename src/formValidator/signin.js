const { mergedYupSchemas } = require('./utils')

const { email } = require('../inputValidator/email')
const { password } = require('../inputValidator/password')
const { passwordConfirm } = require('../inputValidator/passwordConfirm')

const signin = mergedYupSchemas(
    email,
    password,
    passwordConfirm
  )

module.exports = {
    signin
}