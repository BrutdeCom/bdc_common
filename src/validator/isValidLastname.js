const _ = require('lodash')

const { isValidString } = require('./isValidString')

/**
 * Verify lastname.
 * @param {string} lastname - Contains lastname.
 * @returns {boolean} Return a boolean for verify conditions input for lastname.
 */

 const isValidLastname = (lastname) => {
    try {
      if (!isValidString(lastname)) {
        return false
      }
  
      if (_.size(lastname) < 2) {
        return false
      }
      return true
    } catch (error) {
      throw error
    }
  }

  module.exports = {
      isValidLastname
  }