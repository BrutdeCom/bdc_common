const { mergedYupSchemas } = require('./utils')

const { email } = require('../inputValidator/email')
const { password } = require('../inputValidator/password')

const signin = mergedYupSchemas(
    email,
    password
  )

module.exports = {
    signin
}