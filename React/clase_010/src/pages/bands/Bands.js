import React from 'react';
// import axios from 'axios';
// import { useQuery } from 'react-query';

import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import { useBandsData } from '../../hooks/useBandsData';

import {
  BandsContainerStyled,
  BandsErrorMessageStyled,
  // BandsDisabledMessageStyled,
} from './BandsStyles';
// import { Box } from '@mui/system';
// import { Button } from '@mui/material';

// const fetchBands = () => {
//   return axios.get('http://localhost:3006/bandas');
// };

const Bands = () => {
  // const { isLoading, data, isError, error } = useQuery('bands', fetchBands, {
  //   cacheTime: 5000,
  //   // enabled: false,
  //   // onSuccess: data => console.log('Peticion Exitosa', data),
  //   // onError: error => console.log('Ocurrio un error', error),
  //   // retry: 1,
  //   // retryDelay: 1000,
  //   // Data transform
  //   // select: data => {
  //   //   const newBands = data.data.map(band => ({ ...band, genre: 'Cumbia' }));
  //   //   return { ...data, data: newBands };
  //   // },
  // });

  // custom hook
  const { data, isLoading, isError, error } = useBandsData();

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
      )}

      {/* useQueryOnClick */}
      {/* {isIdle && (
        <Box sx={{ width: '100%', textAlign: 'center' }}>
          <BandsDisabledMessageStyled>
            Consulta Deshabilitada
          </BandsDisabledMessageStyled>

          <Button
            sx={{ backgroundColor: '#4c1d95' }}
            variant='contained'
            onClick={refetch}
          >
            Activar
          </Button>
        </Box>
      )} */}

      {data && (
        <BandsContainerStyled>
          {data.data.map(band => (
            <Card key={band.id} {...band} />
          ))}
        </BandsContainerStyled>
      )}
    </>
  );
};

export default Bands;
