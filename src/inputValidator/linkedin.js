const Yup = require('yup')

const linkedin = Yup.object({
    linkedin: Yup.string().matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, "Le format de l'URL n'est pas correct.")
  })

module.exports = {
    linkedin
}