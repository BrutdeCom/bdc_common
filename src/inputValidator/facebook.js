const Yup = require('yup')

const facebook = Yup.object({
    facebook: Yup.string().matches(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, "Le format de l'URL n'est pas correct.")
  })

module.exports = {
    facebook
}