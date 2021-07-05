const { isValidString } = require('./isValidString')
const PHONE_REGEX = require('../regex/phone')

/**
 * Verify phone.
 * @param {string} phone - Contains phone.
 * @returns {boolean} Return a boolean for verify conditions input for phone.
 */

 const isValidPhone = (phone) => {
    try {
      if (!isValidString(phone)) {
        return false
      }
  
      if (!PHONE_REGEX.test(phone)) {
        return false
      }
      return true
    } catch (error) {
      throw error
    }
  }

  module.exports = {
      isValidPhone
  }