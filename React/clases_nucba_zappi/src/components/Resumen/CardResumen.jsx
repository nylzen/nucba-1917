import React from 'react';
import { formatPrice } from '../../utils';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './CardResumenStyles';

const CardResumen = ({ title, desc, quantity, img, price }) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img src={img} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}</p>
        <ProductPriceStyled>{formatPrice(price)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
