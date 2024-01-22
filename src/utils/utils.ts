//@ts-ignore
import _ from 'lodash'
import moment from 'moment'

const validateStringRequestItems = (payload: Record<string, any>): boolean => {
    let isValid = true
    _.map(payload, item => {
      if (!_.isString(item)) {
        isValid = false
      }
    })

  return isValid
}

const nextValue = (array: any, value: string) => {
  if (!_.isArray(array)) {
    throw new TypeError('values is not an array')
  }

  const foundIndex = _.findIndex(array, arrayValue => {
    if (_.isPlainObject(arrayValue)) {
      //@ts-ignore
      return arrayValue.value === value
    }

    return arrayValue === value
  })

  if (foundIndex < 0) {
    throw new TypeError('value is not valid')
  }

  let nextIndex
  if (foundIndex === _.size(array) - 1) {
    nextIndex = 0
  } else {
    nextIndex = foundIndex + 1
  }

  if (_.isPlainObject(array[foundIndex])) {
    return _.get(_.nth(array, nextIndex), 'value')
  }

  return _.nth(array, nextIndex)
}

/**
 * deleteDuplicateKeysAndMakeSumInObjectArray. Normalize object array for delete duplicate object id and make sum for sum key by object id.
 * @param {array} items - Contains items object in array.
 * @returns {array} return array of object with duplicate items deleted and sum for sum key.
 */

const deleteDuplicateKeysAndMakeSumInObjectArray = (items: any, config = {}) => {
  const sumKey = _.get(config, 'sumKey')
  const idKey = _.get(config, 'idKey')

  if(_.isNil(items) || _.isEmpty(items) || !_.isArray(items)) {
      throw new Error('items is not correct format (empty, null or is not an array)')
  }

  if(_.isNil(config) || _.isEmpty(config) || !_.isPlainObject(config)) {
      throw new Error('config is not correct format (empty, null or is not an object)')
  }

  if(_.isNil(sumKey) || !_.isString(sumKey) || _.isEmpty(sumKey)) {
      throw new Error('sum key is nil or is not a string')
  }

  if(_.isNil(idKey) || !_.isString(idKey) || _.isEmpty(idKey)) {
      throw new Error('id key is nil or is not a string')
  }

  const normalizedItems: any = []
  const ids = _.uniq(_.map(items, item => _.get(item, `${idKey}`))) // [ '123', '234', '456' ]

  _.map(ids, id => {
      const filterItemsByIds = _.filter(items, item => { return _.get(item, `${idKey}`) === id})
      const sumById = filterItemsByIds.reduce((sum, item) => sum + _.get(item, `${sumKey}`), 0)

      const result = {
          ..._.head(filterItemsByIds)
      }

      _.set(result, `${sumKey}`, sumById)

      normalizedItems.push(result)
  })

  return normalizedItems
}

/**
 * verifyOrderExpirationTime. Compare dates for verify if order is expired.
 * @param {date} createdAt - Contains creation date of order.
 * @returns {any} .
 */

const verifyOrderExpirationTime = (createdAt: any, config = {}) => {
  if (_.isEmpty(config) || !_.isPlainObject(config) || _.isNil(config)) {
    throw new Error('config is not correct (nil, empty or is not an object)')
  }
  
  const unit = _.get(config, 'unit')
  const timeToCompare = _.get(config, 'timeToCompare')

  if(_.isNil(createdAt)) {
    throw new Error('createdAt is undefined')
  }

  if (_.isEmpty(unit) || !_.isString(unit) || _.isNil(unit)) {
    throw new Error('unit is empty, nil or is not a string')
  }

  if (_.isNil(timeToCompare) || !_.isNumber(timeToCompare)) {
    throw new Error('timeToCompare is nil or is not a number')
  }

  const dateNow = moment()
  const dateNowMinutesDiffWithCreatedAt = dateNow.diff(createdAt, unit)

  if(dateNowMinutesDiffWithCreatedAt > timeToCompare) {
      return true
  } else {
      return false
  }
}

/**
 * Normalize products data.
 * @params {products} An array. Contain products objects
 * @returns {array} Return an array. Contain normalized products.
 */

const normalizeObjectData = (data: any, config = {}) => {
  if (_.isEmpty(data) || !_.isArray(data) || _.isNil(data)) {
    throw new Error('data is not correct (nil, empty or is not an object)')
  }

  if (_.isEmpty(config) || !_.isPlainObject(config) || _.isNil(config)) {
    throw new Error('config is not correct (nil, empty or is not an object)')
  }

  const pickedKeys = _.get(config, 'pickedKeys')

  if (_.isEmpty(pickedKeys) || !_.isArray(pickedKeys) || _.isNil(pickedKeys)) {
    throw new Error('pickedKeys is not correct (nil, empty or is not an object)')
  }

  const normalizedData: any = []
  _.map(data, (product) => {
      const pickedData = _.clone(_.pick(product, pickedKeys))

      const newItem = {}
      _.map(_.keys(pickedData), key => {
        const replaceKeys = _.get(config, 'replaceKeys')

        if(!_.isNil(replaceKeys) && _.isArray(replaceKeys)) {
          _.map(replaceKeys, replace => {
            if(_.isNil(replace) || !_.isPlainObject(replace) || _.isEmpty(replace)) {
              throw new TypeError('replace is incorrect')
            }
            
            const oldKey = _.get(replace, 'oldKey')
            const newKey = _.get(replace, 'newKey')
            
            if(key === oldKey) {
              _.set(newItem, newKey, _.get(pickedData, key))
            } else {
              _.set(newItem, _.camelCase(key), _.get(pickedData, key))
            }
          })
        } else {
          _.set(newItem, _.camelCase(key), _.get(pickedData, key))
        }
      })

      const setValues = _.get(config, 'setValues')

      if(!_.isNil(setValues) && _.isArray(setValues)) {
        _.map(setValues, values => {
          if(_.isNil(values) || !_.isPlainObject(values) || _.isEmpty(values)) {
            throw new TypeError('values is incorrect')
          }

          const value = _.get(values, 'value')
          const key = _.get(values, 'key')
          _.set(newItem, key, value)
        })
      }

      normalizedData.push(newItem)
  })

  return normalizedData
}

/**
 * extractNumberInString. Extract first number in string.
 * @param {date} createdAt - Contains string.
 * @returns {any} .
 */

// TODO: Replace in BDC common
// WARNING: Return only first number in string
const extractNumberInString = (string: any) => {
  if (_.isNil(string)) {
      throw new Error('string is undefined')
  }

  if (!_.isString(string)) {
      throw new Error('string is not a string')
  }

  const extractMinutesNumberInString = string.match(/(\d+)/)

  if(_.isNil(extractMinutesNumberInString)) {
      throw new Error('not number in string')
  }

  // @ts-ignore
  return parseInt(extractMinutesNumberInString[0])
}

export {
  verifyOrderExpirationTime,
  validateStringRequestItems,
  nextValue,
  deleteDuplicateKeysAndMakeSumInObjectArray,
  normalizeObjectData,
  extractNumberInString
}