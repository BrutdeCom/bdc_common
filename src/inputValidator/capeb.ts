import * as Yup from 'yup'

export const capeb = Yup.object({
  capeb: Yup.string().matches(/^[0-9]*$/, 'Le numéro de CAPEB ne doit pas contenir de lettres.'),
})