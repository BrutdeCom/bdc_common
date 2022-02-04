const _ = require('lodash')

/**
 * Return an array, contain enum values.
 * @param {string} payloadEnum - Contain enum.
 * @returns {boolean} Return an array, contain enum values.
 */

 const getEnumValues = (payloadEnum) => {
    try {
      if (!_.isArray(payloadEnum)) {
        throw new Error('The payloadEnum parameter must be an array.')
      }
  
      if (_.size(payloadEnum) < 1) {
        throw new Error('The payloadEnum parameter must be an array with at least one element.')
      }
  
      const enumValues = _.map(payloadEnum, item => {
        const value = _.get(item, 'value')

        return value
      })

      return enumValues
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    getEnumValues
  }