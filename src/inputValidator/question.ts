import * as Yup from 'yup'

export const question = Yup.object({
    question: Yup.string(),
})