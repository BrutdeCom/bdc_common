import Yup from 'yup'

export const question = Yup.object({
    question: Yup.string().required('La question est requise.'),
})