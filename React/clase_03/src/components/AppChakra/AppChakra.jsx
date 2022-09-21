import React from 'react';
import { Box, Checkbox, Container } from '@chakra-ui/react';
import AirbnbCard from '../AirbnbCard/AirbnbCard';

const AppChakra = () => {
  return (
    <Container maxW='4xl'>
      <Box bg='green.400'>Hola</Box>
      <Checkbox>Checkkkkkk</Checkbox>
      <AirbnbCard />
    </Container>
  );
};

export default AppChakra;
