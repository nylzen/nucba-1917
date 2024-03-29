import React, { forwardRef } from 'react';
import shortid from 'shortid';
import { speakers } from '../../utils/data';
import { Button, SectionTitle } from '../globalComponents/GlobalComponents';
import SpeakerCard from '../SpeakerCards/SpeakerCard';
import {
  SpeakersCardsContainer,
  SpeakersSection,
  TitleContainer,
} from './SpeakersStyles';

const Speakers = forwardRef((props, ref) => {
  return (
    <>
      <SpeakersSection ref={ref}>
        <TitleContainer>
          <SectionTitle>Speakers</SectionTitle>
          <Button>Sumarme</Button>
        </TitleContainer>
        <SpeakersCardsContainer>
          {speakers.map(speaker => {
            return <SpeakerCard key={shortid.generate()} {...speaker} />;
          })}
        </SpeakersCardsContainer>
      </SpeakersSection>
    </>
  );
});

export default Speakers;
