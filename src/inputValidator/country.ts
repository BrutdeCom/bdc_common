import * as Yup from 'yup'

export const country = Yup.object({
  country: Yup.string().min(2, 'Votre pays est trop court.'),
})