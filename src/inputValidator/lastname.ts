import Yup from 'yup'

export const lastname = Yup.object({
    lastname: Yup.string().min(2, 'Votre nom est trop court !').required('Votre nom est requis.'),
})