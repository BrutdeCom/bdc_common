import { v4 } from 'uuid'
import _ from 'lodash'

export const checkId = (id) => {
  if (!isValid(id)) {
    throw new Error(`id is not valid`)
  }
}

export const isValid = (id) => {
  if (_.isNil(id) || !_.isString(id)) {
    return false
  }
  if (_.size(_.trim(id)) === 0) {
    return false
  }
  // detect when we pass a file path
  if (id.includes('/') || id.includes('\\')) {
    return false
  }
  if (id.includes(' ')) {
    return false
  }
  // enables to detect object serializing (done by mistake)
  if (id.includes('[') || id.includes(']') || id.includes('{') || id.includes('}')) {
    return false
  }

  return true
}

// Ensure that the generation of the id is consistent throughout the code
export const createId = () => {
  return v4.uuid()
}