const _ = require('lodash')
const { nextValue } = require('./utils')

const normalizeValue = (value) => {
  return _.toLower(_.trim(value))
}

class EnumType {
  constructor (choices, enumName, options = {}) {
    if (!_.isArray(choices) || _.size(choices) === 0) {
      throw new Error('choices should be an array')
    }
    if (!_.isString(enumName) || _.isNil(enumName) || _.isEmpty(enumName)) {
      throw new TypeError('enumName should be a string')
    }
    if (!_.isPlainObject(options)) {
      throw new TypeError(`options is not a plain object - see "${enumName}"`)
    }
    this._choices = choices
    this._options = options
    this._name = enumName
  }

  _findEnumValueError (enumValue, parameterName = 'enumValue') {
    if (_.isNil(enumValue)) {
      return `${parameterName} is nil`
    }
    if (!_.isString(enumValue)) {
      return `${parameterName} should be a string`
    }

    const foundValue = _.find(this._choices, choice => {
      return enumValue === choice.value
    })

    if (_.isNil(foundValue)) {
      return `${parameterName} is not valid: ${enumValue}`
    }
  }

  checkValidity (enumValue, parameterName) {
    const error = this._findEnumValueError(enumValue, parameterName)
    if (!_.isNil(error)) {
      throw new TypeError(error)
    }
  }

  isValid (enumValue) {
    const error = this._findEnumValueError(enumValue)
    return _.isNil(error)
  }

  getCategories () {
    return _.compact(_.uniq(_.map(this._choices, 'category')))
  }

  getCategory (category) {
    return _.compact(_.map(this._choices, choice => {
      if (choice.category === category || (_.isNil(category) && _.isNil(choice.category))) {
        return choice.value
      }
    }))
  }

  getValues () {
    return _.map(this._choices, choice => {
      return choice.value
    })
  }

  next (value) {
    if (_.isNil(value)) {
      // return first choice
      return _.head(this._choices).value
    }

    const nextIndexValue = nextValue(this._choices, value)

    return nextIndexValue
  }

  // Iterate through an enumeration
  map (callback) {
    if (!_.isFunction(callback)) {
      throw new TypeError('callback is not a function')
    }
    return _.map(this.getValues(), value => {
      return callback(value)
    })
  }

  // We accept lower case, upper case, etc.
  parse (value) {
    if (!_.isString(value)) {
      return
    }
    value = normalizeValue(value)
    return _.find(this.getValues(), currentValue => {
      return normalizeValue(currentValue) === value
    })
  }

  getIndex (value) {
    if (!_.isString(value)) {
      return
    }
    value = normalizeValue(value)
    const result = _.findIndex(this.getValues(), currentValue => {
      return normalizeValue(currentValue) === value
    })

    if (result < 0) {
      return
    }

    return result
  }

  getMetaData (value, key, defaultUnit) {
    if (_.isNil(value)) {
      throw new TypeError('value is nil')
    }

    if (!_.isString(value)) {
      throw new TypeError('value is not a string')
    }

    if (_.isEmpty(value)) {
      throw new TypeError('value is empty')
    }

    if (_.isNil(key)) {
      throw new TypeError('key is nil')
    }

    if (!_.isString(key)) {
      throw new TypeError('key is not a string')
    }

    if (_.isEmpty(key)) {
      throw new TypeError('key is empty')
    }

    const values = _.filter(this._choices, choice => {
      return choice.value === value
    })

    if (_.isNil(values)) {
      throw new TypeError('values is nil')
    }

    const currentMetaData = _.get(values[0], key)

    if (_.isNil(currentMetaData)) {
      if (!_.isNil(defaultUnit)) {
        return defaultUnit
      }
      return null
    }

    return currentMetaData
  }

  getName () {
    return this._name
  }

  excludeTranslations () {
    return _.get(this._options, 'excludeTranslations', false)
  }
}

const checkValue = (value, key) => {
  if (_.isNil(value)) {
    throw new TypeError(`${key}.value is nil`)
  }
  if (!_.isString(value)) {
    throw new TypeError(`${key}.value is not a string`)
  }
  if (_.trim(value) === '') {
    throw new TypeError(`${key}.value is empty`)
  }
}

const normalizeChoices = (choices) => {
  const normalizedChoices = []
  _.each(_.keys(choices), key1 => {
    const value = choices[key1]

    if (_.isNil(value)) {
      throw new TypeError('value is nil')
    }

    if (Object.prototype.hasOwnProperty.call(value, 'value')) {
      // If value contain "value" key, is not category but is an object with metadata
      normalizedChoices.push({
        key: key1,
        value: value.value,
        ...value
      })
    } else if (_.isPlainObject(value)) {
      _.each(_.keys(value), key2 => {
        if (_.isPlainObject(value[key2])) {
          checkValue(value[key2].value, key2)
          // If value[key2] is an object, the value is part of a category and contains metadata
          const values = value[key2]
          normalizedChoices.push({
            key: key2,
            category: key1,
            value: values.value,
            ...values
          })
        } else {
          checkValue(value[key2], key2)
          normalizedChoices.push({
            key: key2,
            category: key1,
            value: value[key2]
          })
        }
      })
    } else {
      checkValue(value, key1)
      normalizedChoices.push({
        key: key1,
        value
      })
    }
  })

  return normalizedChoices
}

const createEnum = (choices, enumName, options = {}) => {
  const normalizedChoices = normalizeChoices(choices)
  const result = new EnumType(normalizedChoices, enumName, options)

  _.each(normalizedChoices, choice => {
    const { value, key } = choice

    _.set(result, key, value)
  })

  return result
}

module.exports = {
  createEnum
}
