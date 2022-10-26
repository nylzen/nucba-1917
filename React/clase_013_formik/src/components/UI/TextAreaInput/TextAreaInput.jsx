import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { InputBoxStyled, InputLabelStyled } from '../Input/InputStyles';
import { TextArea, ErrorStyled } from './TextAreaInputStyles';

const TextAreaInput = ({ name, label, isError, ...field }) => {
  return (
    <InputBoxStyled>
      <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
      {/* <TextArea id={label} name={name} error={isError} {...field} />

      {isError && <ErrorStyled>{isError}</ErrorStyled>} */}

      {/* Components Formik */}
      <Field name={name} id={label} error={isError} as={TextArea} />

      <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  );
};

export default TextAreaInput;
