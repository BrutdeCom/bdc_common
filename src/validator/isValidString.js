const _ = require('lodash')
const validator = require('validator')

/**
 * Verify string format.
 * @param {string} string - Contains string value.
 * @returns {boolean} Return a boolean for verify conditions input for string.
 */

 const isValidString = (string) => {
    const { isEmpty } = validator
    try {
      if (_.isNil(string)) {
        return false
      }
  
      if (!_.isString(string)) {
        return false
      }
  
      if (isEmpty(string)) {
        return false
      }
  
      return true
    } catch (error) {
      throw error
    }
  }

module.exports = {
  isValidString
}