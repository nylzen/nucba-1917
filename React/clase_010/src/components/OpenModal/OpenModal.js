import React from 'react';
import { OpenModalContainerStyled } from './OpenModalStyles';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';

const OpenModal = ({ handleOpen }) => {
  return (
    <motion.div
      style={{ height: '100%' }}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 0.95 }}
    >
      <OpenModalContainerStyled onClick={handleOpen}>
        <AddIcon sx={{ fontSize: '48px', color: 'white' }} />
      </OpenModalContainerStyled>
    </motion.div>
  );
};

export default OpenModal;
