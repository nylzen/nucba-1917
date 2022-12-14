import React, { forwardRef } from 'react';
import shortid from 'shortid';
import { lineup } from '../../utils/data';
import {
  SectionParagraph,
  SectionTitle,
  TextSpan,
} from '../globalComponents/GlobalComponents';
import LineupCard from '../lineupCard/LineupCard';
import {
  LineupCardsContainer,
  LineupDate,
  LineupSection,
  LineupTitleContainer,
} from './LineUpStyles';

const LineUp = forwardRef((props, ref) => {
  return (
    <>
      <LineupSection ref={ref}>
        <LineupTitleContainer>
          <SectionTitle>Lineup</SectionTitle>
          <SectionParagraph fontSize='18px'>
            Nuestros Summit online, abierto y gratuito, donde reuinimos a los
            principales referentes de{' '}
            <TextSpan color='var(--blue)'>la Scaloneta</TextSpan> para compartir
            su amplio conocimiento en React JS
          </SectionParagraph>
        </LineupTitleContainer>
        <LineupDate>Domingo, 18 de Diciembre de 2022 a las 12:00</LineupDate>

        <LineupCardsContainer>
          {lineup.map(talk => {
            return <LineupCard key={shortid.generate()} {...talk} />;
          })}
        </LineupCardsContainer>
      </LineupSection>
    </>
  );
});

export default LineUp;
