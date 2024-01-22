import * as Yup from 'yup'

export const activityType = Yup.object({
  activityType: Yup.string(),
})