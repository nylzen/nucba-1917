import React from 'react';
import { Button, TextSpan } from '../globalComponents/GlobalComponents';
import {
  HeroImage,
  HeroParagraph,
  HeroSection,
  HeroSlogan,
  HeroTextContainer,
  HeroTitle,
} from './HeroStyles';

const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroSlogan>
          <HeroTextContainer>
            <HeroTitle>
              <TextSpan color='var(--blue)'>React</TextSpan> Summit 2022
            </HeroTitle>
            <HeroParagraph>
              Summit de React - World Cup Edition by{' '}
              <TextSpan color='var(--blue)'>Nucba</TextSpan>
            </HeroParagraph>
          </HeroTextContainer>
          <Button>Ver Speakers</Button>
        </HeroSlogan>
        <HeroImage src='images/logo512.png' alt='React img' />
      </HeroSection>
    </>
  );
};

export default Hero;
