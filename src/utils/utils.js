const _ = require('lodash')

const validateStringRequestItems = (payload) => {
    let isValid = true
    _.map(payload, item => {
      if (!_.isString(item)) {
        isValid = false
      }
    })

  return isValid
}

const nextValue = (array, value) => {
  if (!_.isArray(array)) {
    throw new TypeError('values is not an array')
  }

  const foundIndex = _.findIndex(array, arrayValue => {
    if (_.isPlainObject(arrayValue)) {
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

const deleteDuplicateKeysAndMakeSumInObjectArray = (items, config = {}) => {
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

  const normalizedItems = []
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

module.exports = {
  validateStringRequestItems,
  nextValue,
  deleteDuplicateKeysAndMakeSumInObjectArray
}