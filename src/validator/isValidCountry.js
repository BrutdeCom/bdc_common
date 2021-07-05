const _ = require('lodash')

const { isValidString } = require('./isValidString')

/**
 * Verify country.
 * @param {string} country - Contains country.
 * @returns {boolean} Return a boolean for verify conditions input for country.
 */

const isValidCountry = (country) => {
    try {
      if (!isValidString(country)) {
        return false
      }
  
      if (_.size(country) < 2) {
        return false
      }
  
      return true
    } catch (error) {
      throw error
    }
  }

  module.exports = {
      isValidCountry
  }