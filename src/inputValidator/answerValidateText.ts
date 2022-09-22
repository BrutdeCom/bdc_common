import Yup from 'yup'

export const answerValidateText = Yup.object({
    answerValidateText: Yup.string().required('La texte correspondant à la réponse OUI est requis.'),
})