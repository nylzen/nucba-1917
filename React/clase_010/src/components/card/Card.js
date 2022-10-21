import React from 'react';

import BandPhoto from '../bandPhoto/BandPhoto';
import BandButton from '../bandButton/BandButton';
import CardFooter from '../cardFooter/CardFooter';

import {
  CardContainerStyled,
  CardContentContainerStyled,
  CardDescriptionStyled,
  CardTitleStyled,
  LinkStyled,
  ButtonsContainerStyled,
} from './CardStyles';
import { useLocation } from 'react-router-dom';

const Card = props => {
  // agregar pathname
  const { pathname } = useLocation();
  const { name, img, listeners, genre, lastSong, id } = props;

  return (
    <CardContainerStyled>
      <BandPhoto img={img} alt={name} />

      <CardContentContainerStyled>
        {pathname.match(/band/i) ? (
          <LinkStyled to={`/band/${id}`}>
            <CardTitleStyled>{name}</CardTitleStyled>
          </LinkStyled>
        ) : (
          <CardTitleStyled>{name}</CardTitleStyled>
        )}

        <CardDescriptionStyled>
          {listeners} oyentes mensuales
        </CardDescriptionStyled>
      </CardContentContainerStyled>

      <ButtonsContainerStyled>
        <BandButton genre={genre} />
        {pathname.match(/bands/i) && <BandButton id={id} deleteButton />}
      </ButtonsContainerStyled>

      {!pathname.match(/bands/i) && <CardFooter lastSong={lastSong} />}
    </CardContainerStyled>
  );
};

export default Card;
