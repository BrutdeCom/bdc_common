import _ from 'lodash'

/**
 * Return an array, contain enum values.
 * @param {string} payloadEnum - Contain enum.
 * @returns {array} Return an array, contain enum values.
 */

export const getEnumValues = (payloadEnum: []) => {
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

 const getEnumSubTypeValues = (payloadEnum: [], key:  string) => {
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

 /**
 * Return an array, contain enum sub type values by parent.
 * @param {string} payloadEnum - Contain enum.
 * @param {string} key - Contain key name for sub type.
 * @param {string} parentKey - Contain anum parent key type.
 * @returns {array} Return an array, contain enum sub type values.
 */

 const getEnumSubTypeValuesByParent = (payloadEnum, key, parentKey) => {
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

    if (_.isNil(parentKey) || !_.isString(parentKey)) {
      throw new Error('The parentKey parameter must be a string.')
    }

    let subTypeValues = []
    _.map(payloadEnum, item => {
      const value = _.get(item, 'value')

      if (!_.isNil(value)) {
        if (_.isEqual(value, parentKey)) {
          const subTypes = _.get(item, key)

          _.map(subTypes, subItem => {
            const subTypeValue = _.get(subItem, 'value')

            if (!_.isNil(subTypeValue)) {
              subTypeValues.push(subTypeValue)
            }
          })
        }
      }
    })

    return subTypeValues
  } catch (error) {
    throw error
  }
}

 /**
 * Return an array, contain enum sub type values by parent.
 * @param {string} payloadEnum - Contain enum.
 * @param {string} key - Contain key name for sub type.
 * @param {string} parentKey - Contain anum parent key type.
 * @returns {array} Return an array, contain enum sub type values.
 */

  const getEnumSubTypeByParent = (payloadEnum, key, parentKey) => {
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
  
      if (_.isNil(parentKey) || !_.isString(parentKey)) {
        throw new Error('The parentKey parameter must be a string.')
      }
  
      let enumSubTypes = []
      
      _.map(payloadEnum, item => {
        if (_.isEqual(item.value, parentKey)) {
          const subTypes = _.get(item, key)
  
          _.map(subTypes, subItem => {
            enumSubTypes.push(subItem)
          })
        }
      })

      return enumSubTypes
    } catch (error) {
      throw error
    }
  }

 /**
 * Return an array, contain enum sub type objects.
 * @param {string} payloadEnum - Contain enum.
 * @returns {array} Return an array, contain enum sub type objects.
 */

  const getEnumSubTypes = (payloadEnum, key) => {
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

      let enumSubTypes = []
      
      _.map(payloadEnum, item => {
        const subTypes = _.get(item, key)

        _.map(subTypes, subItem => {
          enumSubTypes.push(subItem)
        })
      })

      return enumSubTypes

    } catch (error) {
      throw error
    }
  }

  module.exports = {
    getEnumValues,
    getEnumSubTypeValues,
    getEnumSubTypes,
    getEnumSubTypeValuesByParent,
    getEnumSubTypeByParent
  }