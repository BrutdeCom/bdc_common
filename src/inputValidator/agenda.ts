import * as Yup from 'yup'

export const agenda = Yup.object({
    agenda: Yup.string().matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, "Le format de l'URL n'est pas correct.")
  })