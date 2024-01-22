import * as Yup from 'yup'

export const consent = Yup.object({
  consent: Yup.boolean().required('Le consentement est requis.'),
})