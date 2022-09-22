import Yup from 'yup'

export const file = Yup.object().shape({
  file: Yup.mixed().required('File is required')
})