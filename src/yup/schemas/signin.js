const { mergedYupSchemas } = require('../utils')
const { email } = require('../email')
const { password } = require('../password')

const signin = mergedYupSchemas(
    email,
    password
  )

module.exports = {
    signin
}