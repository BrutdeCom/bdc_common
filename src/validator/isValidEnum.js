const _ = require('lodash')

const isValidEnum = (value, payloadEnum) => {
  try {
    if(_.isNil(value) || _.isNil(payloadEnum)) {
      return null
    }
  
    if(!_.isString(value)) {
      throw new Error('Value is not a string')
    }
  
    if(!_.isArray(payloadEnum)) {
      throw new Error('Enum is not an array')
    }

    if(_.isPlainObject(_.head(payloadEnum))) {
      _.map(payloadEnum, Enum => {
        if (_.get(Enum, 'value') === value) {
          return true
        }
      })
    } else if (_.isString(_.head(payloadEnum))) {
        if(_.includes(payloadEnum, value)) {
          return true
        }
    }
    
    return false
  } catch (error) {
    throw error
  }
}
  
module.exports = {
  isValidEnum
}