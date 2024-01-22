import { mergedYupSchemas } from './utils'

import { email } from '../inputValidator/email'
import { password } from '../inputValidator/password'
import { passwordConfirm } from '../inputValidator/passwordConfirm'

const signin = mergedYupSchemas(
    email,
    password,
    passwordConfirm
  )

export {
    signin
}