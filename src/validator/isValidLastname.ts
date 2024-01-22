import _ from 'lodash'

import { isValidString } from './isValidString'

/**
 * Verify lastname.
 * @param {string} lastname - Contains lastname.
 * @returns {boolean} Return a boolean for verify conditions input for lastname.
 */

export const isValidLastname = (lastname) => {
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