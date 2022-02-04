const _ = require('lodash')

/**
 * Return an array, contain enum values.
 * @param {string} payloadEnum - Contain enum.
 * @returns {array} Return an array, contain enum values.
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

  /**
 * Return an array, contain enum sub type values.
 * @param {string} payloadEnum - Contain enum.
 * @returns {array} Return an array, contain enum sub type values.
 */

 const getEnumSubTypeValues = (payloadEnum, key) => {
    try {
      if (!_.isArray(payloadEnum)) {
        throw new Error('The payloadEnum parameter must be an array.')
      }
  
      if (_.size(payloadEnum) < 1) {
        throw new Error('The payloadEnum parameter must be an array with at least one element.')
      }

      if (_.isNil(key) || !_.isString(key)) {
        throw new Error('The key parameter must be a string.')
      }
  
      let subTypeValues = []
      _.map(payloadEnum, item => {
        const subType = _.get(item, `${key}`)

        _.map(subType, subItem => {
            const value = _.get(subItem, 'value')
    
            if (!_.isNil(value)) {
                subTypeValues.push(value)
            }
        })
      })

      return subTypeValues
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    getEnumValues,
    getEnumSubTypeValues
  }