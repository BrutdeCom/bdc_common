import _ from 'lodash'
import { isValidString } from './isValidString'

// Lhun
export const isValidSiret = (payload) => {
  let isValid

  if (!isValidString(payload) || _.size(payload) !== 14) {
    isValid = false
  }

  const siret = parseInt(payload)

  if (_.isNaN(siret)) {
    isValid = false
  } else {
    let somme = 0
    let tmp
    
    // @ts-ignore
    for (let cpt = 0; cpt<siret.length; cpt++) {
      if ((cpt % 2) == 0) {
        // @ts-ignore
        tmp = siret.charAt(cpt) * 2
        if (tmp > 9) {
          tmp -= 9
        }
      } else {
        // @ts-ignore
        tmp = siret.charAt(cpt)
        somme += parseInt(tmp)
      }
    }

    if ((somme % 10) == 0) {
      isValid = true
    } else {
      isValid = false
    }
  }
  
  return isValid
  }