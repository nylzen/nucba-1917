import React from 'react';
import Button from '../../components/button/Button';
import { ProgressBar } from '../../components/progress/ProgressBar';
import Title from '../../components/title/Title';
import { ContainerButtonStyled, ErrorContainerStyled } from './Error404Styles';

// Importar useNavigate
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <ErrorContainerStyled>
      <Title>ERROR 404 NOT FOUND!</Title>
      <ContainerButtonStyled>
        <Button primary onClick={() => navigate('/')}>
          {' '}
          Volver al inicio
        </Button>
      </ContainerButtonStyled>
      <ProgressBar />
    </ErrorContainerStyled>
  );
};

export default Error404;
