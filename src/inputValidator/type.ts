import Yup from 'yup'

export const type = Yup.object({
    type: Yup.string().required('Le type de la question est requis.'),
})