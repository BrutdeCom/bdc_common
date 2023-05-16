const Yup = require('yup')

const instagram = Yup.object({
    instagram: Yup.string().matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, "Le format de l'URL n'est pas correct.")
  })

module.exports = {
    instagram
}