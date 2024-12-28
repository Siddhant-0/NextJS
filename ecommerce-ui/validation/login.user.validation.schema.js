import * as Yup from 'yup';
export const loginUserValidationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is Required')
    .max(55, 'email must be maximum of 55 characters')
    .trim()
    .lowercase(),
  password: Yup.string()
    .required('Password is required')
    .max(20, 'Password must be of max 20 length'),
});
