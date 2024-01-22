import _ from 'lodash'

import { isValidString } from './isValidString'
import CITY_REGEX from '../regex/city'

/**
 * Verify city.
 * @param {string} city - Contains city.
 * @returns {boolean} Return a boolean for verify conditions input for city.
 */

export const isValidCity = (city) => {
    try {
      if (!isValidString(city)) {
        return false
      }
  
      if (_.size(city) < 2) {
        return false
      }
  
      if (!CITY_REGEX.test(city)) {
        return false
      }
      return true
    } catch (error) {
      throw error
    }
  }