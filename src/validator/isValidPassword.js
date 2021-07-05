const { isValidString } = require('./isValidString')
const PASSWORD_REGEX = require('../regex/password')

/**
 * Verify password.
 * @param {string} password - Contains password.
 * @returns {boolean} Return a boolean for verify conditions input for password.
 */

// TODO: Modify with params for custom password
 const isValidPassword = (password) => {
    try {
      if (!isValidString(password)) {
        return false
      }
  
      if (!PASSWORD_REGEX.test(password)) {
        return false
      }
  
      return true
    } catch (error) {
      throw error
    }
  }

  module.exports = {
      isValidPassword
  }