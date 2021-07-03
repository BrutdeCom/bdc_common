const { isValidString } = require('./isValidString')
const validator = require('validator')

/**
 * Verify email format.
 * @param {string} email - Contains email.
 * @returns {boolean} Return a boolean for verify conditions input for email.
 */

 const isValidEmail = (email) => {
    const { isEmail } = validator
    try {
      if (!isValidString(email)) {
        return false
      }
  
      if (!isEmail(email)) {
        return false
      }
  
      return true
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    isValidEmail
  }