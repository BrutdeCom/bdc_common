import Yup from 'yup'

export const subTheme = Yup.object({
    subTheme: Yup.string().required('La catégorie de la question est requise.'),
})