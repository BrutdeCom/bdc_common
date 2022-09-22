import Yup from 'yup'

export const theme = Yup.object({
    theme: Yup.string().required('Le thème de la question est requise.'),
})