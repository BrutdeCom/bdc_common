const _ = require('lodash')

const { isValidString } = require('./isValidString')

/**
 * Verify firstname.
 * @param {string} firstname - Contains firstname.
 * @returns {boolean} Return a boolean for verify conditions input for firstname.
 */

 const isValidFirstname = (firstname) => {
    try {
      if (!isValidString(firstname)) {
        return false
      }
  
      if (_.size(firstname) < 2) {
        return false
      }
      return true
    } catch (error) {
      throw error
    }
  }

  module.exports = {
      isValidFirstname
  }