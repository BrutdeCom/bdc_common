import Yup from 'yup'

export const activityType = Yup.object({
  activityType: Yup.string().required('Le type d\'activité est requis.'),
})