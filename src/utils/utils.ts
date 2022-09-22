import _ from 'lodash'

export const validateStringRequestItems = (payload) => {
    let isValid = true
    _.map(payload, item => {
      if (!_.isString(item)) {
        isValid = false
      }
    })

  return isValid
}