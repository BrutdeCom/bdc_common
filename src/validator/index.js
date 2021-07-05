const { isValidEmail } = require('./isValidEmail')
const { isValidString } = require('./isValidString')
const { isValidZip } = require('./isValidZip')
const { isValidCountry } = require('./isValidCountry')
const { isValidAddress } = require('./isValidAddress')
const { isValidCity } = require('./isValidCity')
const { isValidPhone } = require('./isValidPhone')
const { isValidLastname } = require('./isValidLastname')
const { isValidFirstname } = require('./isValidFirstname')
const { isValidPassword } = require('./isValidPassword')

module.exports = {
    isValidString,
    isValidEmail,
    isValidZip,
    isValidCountry,
    isValidAddress,
    isValidCity,
    isValidPhone,
    isValidLastname,
    isValidFirstname,
    isValidPassword
}