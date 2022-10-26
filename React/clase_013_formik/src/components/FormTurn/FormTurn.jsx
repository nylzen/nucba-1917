import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import Input from '../UI/Input/Input';
import Submit from '../UI/Submit/Submit';
import TextAreaInput from '../UI/TextAreaInput/TextAreaInput';

import { Form, FormBox, FormSubtitle, FormTitle } from './FormTurnStyles';

// const validate = values => {
//   const errors = {};

//   if (!values.name) {
//     errors.name = 'Campo requerido';
//   } else if (values.name.length > 5) {
//     errors.name = 'Te pasaste de 5';
//   }
//   return errors;
// };

// Regex para telefono, que tenga 10 numeros
const phoneRegex = /\d{10}/;

const validationSchema = Yup.object({
  name: Yup.string().trim().required('Nombre Requerido').max(10, 'Te pasaste'),
  surname: Yup.string().trim().required('Apellido Requerido'),
  date: Yup.date().required('Fecha Requerida'),
  age: Yup.number()
    .integer('Deber ser un entero')
    .moreThan(16, 'Sos menor')
    .lessThan(80, 'Descansa del trabajo')
    .required('Edad Requerida'),
  email: Yup.string().email('Email inválido').required('Email Requerido'),
  cellphone: Yup.string()
    .matches(phoneRegex, 'Numero Inválido')
    .required('Celular Requerido'),
  comments: Yup.string().max(255, 'Máximo de 255 caracteres').notRequired(),
});

const FormTurn = () => {
  // const { handleSubmit, getFieldProps, errors, touched } = useFormik({
  //   initialValues: {
  //     name: '',
  //     surname: '',
  //     date: '',
  //     age: '',
  //     email: '',
  //     cellphone: '',
  //     comments: '',
  //   },
  //   validationSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     console.log('Form Data', values);
  //     resetForm();
  //   },
  // });

  return (
    <FormBox>
      <FormTitle>¡Carga de turnos!</FormTitle>
      <FormSubtitle>
        A continuación debés dejar los datos del turno reservado en el{' '}
        <b>NucWorking</b>
      </FormSubtitle>
      <Formik
        initialValues={{
          name: '',
          surname: '',
          date: '',
          age: '',
          email: '',
          cellphone: '',
          comments: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log({ values });
          resetForm();
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <Input
              name='name'
              label='Nombre'
              type='text'
              isError={touched.name && errors.name}
            ></Input>
            <Input
              name='surname'
              label='Apellido'
              type='text'
              isError={touched.surname && errors.surname}
            ></Input>
            <Input
              name='date'
              label='Fecha'
              type='date'
              isError={touched.date && errors.date}
            ></Input>
            <Input
              name='age'
              label='Edad'
              type='number'
              isError={touched.age && errors.age}
            ></Input>
            <Input
              name='email'
              label='Correo Electronico'
              type='email'
              isError={touched.email && errors.email}
            ></Input>
            <Input
              name='cellphone'
              label='Telefono'
              type='tel'
              isError={touched.cellphone && errors.cellphone}
            ></Input>
            <TextAreaInput
              name='comments'
              label='¿Cómo escuchaste de nosotros?'
              isError={touched.comments && errors.comments}
            />
            <Submit />
          </Form>
        )}
      </Formik>
    </FormBox>
  );
};

export default FormTurn;
