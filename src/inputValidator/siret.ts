import Yup from 'yup'

export const siret = Yup.object({
  siret: Yup.string().required('Votre numéro de SIRET est requis.').min(14, 'Votre numéro de SIRET est trop court.').max(14, 'Votre numéro de SIRET est trop long.').matches(/^[0-9]*$/, 'Le numéro de SIRET ne doit pas contenir de lettres.'),
})