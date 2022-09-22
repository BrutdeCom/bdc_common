import Yup from 'yup'

export const category = Yup.object({
    category: Yup.string().required('La catégorie de la question est requise.'),
})