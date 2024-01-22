import * as Yup from 'yup'

interface AccommodationName {
  accommodationName?: string;
}

export const accommodationName: Yup.ObjectSchema<AccommodationName> = Yup.object({
  accommodationName: Yup.string().min(2, 'Le nom est trop court !')
})