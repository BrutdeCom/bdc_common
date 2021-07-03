/**
 * Password Regex
 * @type {regex}
 */

 const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!$%*+/@_-])([\w!$%*+@-]{16,})$/

 module.exports = PASSWORD_REGEX