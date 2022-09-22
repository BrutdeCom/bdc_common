import Yup from 'yup'

export const answerUnvalidateText = Yup.object({
    answerUnvalidateText: Yup.string().required('La texte correspondant à la réponse NON est requis.'),
})