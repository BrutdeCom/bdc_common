// Utils function
const { mergedYupSchemas } = require('./utils')

// Input validator
const { email } = require('./email')
const { password } = require('./password')

// Entire schema form validator
const { signin } = require('./schemas/signin')

module.exports = {
    mergedYupSchemas,
    email,
    password,
    signin
}