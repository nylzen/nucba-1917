import * as Yup from 'yup';
import { regEmail } from '../utils';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  location: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string().matches(regEmail, 'Mail no válido'),
  password: Yup.string()
    .min(6, 'Mínimo de caracteres: 6')
    .required('Campo Requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, 'Mail no válido'),
  password: Yup.string()
    .min(6, 'Minimo de caracteres: 6')
    .required('Campo requerido'),
});

export const forgotPasswordValidationSchema = Yup.object({
  email: Yup.string().matches(regEmail, 'Mail no válido'),
});
