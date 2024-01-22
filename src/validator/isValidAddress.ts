import _ from 'lodash'

import { isValidString } from './isValidString'

/**
 * Verify address.
 * @param {string} address - Contains address.
 * @returns {boolean} Return a boolean for verify conditions input for address.
 */

export const isValidAddress = (address) => {
    try {
      if (!isValidString(address)) {
        return false
      }
  
      if (_.size(address) < 5) {
        return false
      }
  
      return true
    } catch (error) {
      throw error
    }
  }