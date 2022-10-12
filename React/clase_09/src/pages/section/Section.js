import React from 'react';
import Panel from '../../components/panel/Panel';
import Title from '../../components/title/Title';
import { SectionContainerStyled } from './SectionStyles';

import { useParams } from 'react-router-dom';

const Section = () => {
  const { product } = useParams();

  return (
    <>
      <SectionContainerStyled>
        <Title> Seccion de {product} </Title>
        <Panel>
          {' '}
          Acá tendríamos nuestros {product} si alguno de la heladería trabajara{' '}
        </Panel>
      </SectionContainerStyled>
    </>
  );
};

export default Section;
