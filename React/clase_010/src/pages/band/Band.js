import React from 'react';
import { useParams } from 'react-router-dom';
import { useBandData } from '../../hooks/useBandData';
import { BandsErrorMessageStyled, BandsContainerStyled } from './BandStyles';

import Loader from '../../components/loader/Loader';
import Card from '../../components/card/Card';

const Band = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useBandData(id);

  return (
    <>
      {isLoading && <Loader />}
      {isError && (
        <BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
      )}
      {data && (
        <BandsContainerStyled>
          <Card {...data.data} />
        </BandsContainerStyled>
      )}
    </>
  );
};

export default Band;
