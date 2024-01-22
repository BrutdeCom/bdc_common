import * as Yup from 'yup'

interface Accommodation {
  accommodation?: string;
}

export const accommodation: Yup.ObjectSchema<Accommodation> = Yup.object({
  accommodation: Yup.string(),
})