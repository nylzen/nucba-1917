import React from 'react';
import { BandButtonStyled } from './BandButtonStyles';
import { useDeleteBand } from '../../hooks/useDeleteBand';

const BandButton = ({ genre = '', deleteButton = false, id = null }) => {
  const { mutate } = useDeleteBand();

  const handleDelete = () => {
    const auth = window.confirm(
      'Estas seguro de eliminar esta banda de la lista?'
    );
    if (id && auth) {
      mutate(id);
    }
  };

  return (
    <>
      {deleteButton ? (
        <BandButtonStyled onClick={handleDelete} deleteButton={deleteButton}>
          {'Eliminar de mi lista'}
        </BandButtonStyled>
      ) : (
        <BandButtonStyled deleteButton={deleteButton}>{genre}</BandButtonStyled>
      )}
    </>
  );
};

export default BandButton;
