import _ from 'lodash'

import { isValidString } from './isValidString'
import ZIP_REGEX from '../regex/zip'

/**
 * Verify zip.
 * @param {string} address - Contains zip.
 * @returns {boolean} Return a boolean for verify conditions input for zip.
 */

export const isValidZip = (zip) => {
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