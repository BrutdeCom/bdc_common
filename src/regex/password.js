/**
 * Password Regex
 * @type {regex}
 */

 const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!$%*+/@_-])([\w!$%*+@-]{8,})$/

 module.exports = PASSWORD_REGEX