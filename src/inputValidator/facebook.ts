import * as Yup from 'yup'

export const facebook = Yup.object({
    facebook: Yup.string().matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, "Le format de l'URL n'est pas correct.")
  })