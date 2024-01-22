import * as Yup from 'yup'

export const userType = Yup.object({
  userType: Yup.string(),
})