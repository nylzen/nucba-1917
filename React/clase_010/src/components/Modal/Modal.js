import React, { useState } from 'react';
import OpenModal from '../OpenModal/OpenModal';
import ModalInput from '../ModalInput/ModalInput';

import { useAddBand } from '../../hooks/useAddBand';
import { handlerSubmit } from '../../utils/handlerSubmit';

import {
  ButtonsContainerStyled,
  InputsContainerStyled,
  ModalContainerStyled,
  ModalDescriptionStyled,
  ModalTitleStyled,
} from './ModalStyles';

import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const FormModal = () => {
  // Seteamos el useState para abrir y cerrar el modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Seteamos el form
  const [form, setForm] = useState({});
  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //   hacemos uso del useAddBand
  const { mutate } = useAddBand();

  return (
    <div>
      <OpenModal handleOpen={handleOpen}>Open Modal</OpenModal>
      <Modal open={open} onClose={() => handleClose()}>
        <ModalContainerStyled>
          <ModalTitleStyled>React Query Mutations</ModalTitleStyled>
          <ModalDescriptionStyled>
            A continuacion vamos a rellenar un formulario para poder realizar
            nuestras primeras mutaciones.
          </ModalDescriptionStyled>
          <InputsContainerStyled>
            <ModalInput
              type='text'
              name='name'
              label='Nombre de la banda'
              handleChange={handleChange}
            />
            <ModalInput
              type='text'
              name='genre'
              label='Genero Musical'
              handleChange={handleChange}
            />
            <ModalInput
              type='text'
              name='lastSong'
              label='Último lanzamiento'
              handleChange={handleChange}
            />
            <ModalInput
              type='number'
              name='listeners'
              label='N° de oyentes'
              placeholder='Completalo con números'
              handleChange={handleChange}
            />
            <ModalInput
              type='text'
              name='img'
              label='Foto de perfil'
              placeholder='Completalo con el link de la imagen'
              handleChange={handleChange}
            />
          </InputsContainerStyled>
          <ButtonsContainerStyled>
            <Button
              sx={{ backgroundColor: '#4c1d95' }}
              variant='contained'
              onClick={() => {
                handleClose();
                setForm({});
              }}
            >
              Cancelar
            </Button>
            <Button
              sx={{ backgroundColor: '#4c1d95' }}
              variant='contained'
              onClick={() =>
                handlerSubmit(form)
                  .then(res => {
                    handleClose();
                    setForm({});
                    mutate(res);
                  })
                  .catch(err => alert(err))
              }
            >
              Enviar
            </Button>
          </ButtonsContainerStyled>
        </ModalContainerStyled>
      </Modal>
    </div>
  );
};

export default FormModal;
