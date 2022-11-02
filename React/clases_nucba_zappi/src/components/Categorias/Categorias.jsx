import React from 'react';
import { Categories } from '../../data';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';

const Categorias = () => {
  return (
    <CategoriasContainer>
      {Categories.map(category => (
        <Categoria key={category.id} {...category} />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
