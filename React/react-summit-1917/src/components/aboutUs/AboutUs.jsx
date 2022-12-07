import React from 'react';
import {
  SectionParagraph,
  SectionTitle,
  TextSpan,
} from '../globalComponents/GlobalComponents';
import {
  AboutCard,
  AboutCardsContainer,
  AboutContent,
  AboutImage,
  AboutSection,
} from './AboutUsStyles';

const AboutUs = () => {
  return (
    <>
      <AboutSection>
        <AboutImage />
        <AboutContent>
          <SectionTitle>
            # <TextSpan color='var(--blue)'>Nucba</TextSpan> Summit
          </SectionTitle>
          <SectionParagraph>
            Seguí el evento en vivo por las redes sociales de{' '}
            <TextSpan color='var(--blue)'>Nucba</TextSpan> y utilizá el hashtag
            para enterarte de todo lo que sucede en el evento.
          </SectionParagraph>
          <AboutCardsContainer>
            <AboutCard>
              <TextSpan color='var(--white)'>2</TextSpan>
              <SectionParagraph>Días</SectionParagraph>
            </AboutCard>

            <AboutCard>
              <TextSpan color='var(--white)'>+5</TextSpan>
              <SectionParagraph>Speakers</SectionParagraph>
            </AboutCard>
          </AboutCardsContainer>
        </AboutContent>
      </AboutSection>
    </>
  );
};

export default AboutUs;
