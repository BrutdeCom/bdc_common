import _ from 'lodash'
import validator from 'validator'

/**
 * Verify string format.
 * @param {string} string - Contains string value.
 * @returns {boolean} Return a boolean for verify conditions input for string.
 */

export const isValidString = (string) => {
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