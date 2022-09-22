import _ from 'lodash'

export const isValidEnum = (value, payloadEnum) => {
  try {
    if(_.isNil(value) || _.isNil(payloadEnum)) {
      return false
    }
  
    if(!_.isString(value)) {
      throw new Error('Value is not a string')
    }
  
    if(!_.isArray(payloadEnum)) {
      throw new Error('Enum is not an array')
    }
    
    let validate = []
    // @ts-ignore
    validate = _.filter(payloadEnum, Enum => {
      const enumValue = _.get(Enum, 'value')

      return _.isEqual(enumValue, value)
    })

    if(_.size(validate) <= 0) {
      return false
    } else {
      return true
    }
  } catch (error) {
    throw error
  }
}