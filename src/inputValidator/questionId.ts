import Yup from 'yup'

export const questionId = Yup.object({
    questionId: Yup.string().required('L\'id de la question est requis'),
})