const _ = require('lodash')

const { isValidString } = require('./isValidString')
const ZIP_REGEX = require('../regex/zip')

/**
 * Verify zip.
 * @param {string} address - Contains zip.
 * @returns {boolean} Return a boolean for verify conditions input for zip.
 */

const isValidZip = (zip) => {
    try {
      if (!isValidString(zip)) {
        return false
      }
  
      if (_.size(zip) < 5) {
        return false
      }
  
      if (_.size(zip) > 5) {
        return false
      }
  
      if (!ZIP_REGEX.test(zip)) {
        return false
      }
  
      return true
    } catch (error) {
      throw error
    }
  }

  module.exports = {
      isValidZip
  }