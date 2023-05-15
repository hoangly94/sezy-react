import * as yup from 'yup'

export const emailSchema = yup.string().email().required()

export const passwordSchema = yup.string().min(6).max(64).required()

export const loginFormSchema = yup.object().shape({
  email: emailSchema,
  password: passwordSchema,
})
