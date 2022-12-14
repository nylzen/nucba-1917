import React from 'react';
import { ImInstagram, ImTwitter } from 'react-icons/im';
import {
  Divider,
  SectionParagraph,
  TextSpan,
} from '../globalComponents/GlobalComponents';
import {
  FooterContainer,
  FooterInfo,
  FooterLink,
  FooterMsg,
  FooterParagraph,
  FooterSocial,
  FooterTerms,
  FooterUI,
} from './FooterStyles';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <Divider />
        <FooterUI>
          <FooterMsg>
            <SectionParagraph>
              Lionel dijo que la gente crea, porque tiene con que creer, así que
              en <TextSpan color='var(--blue)'>Nucba</TextSpan> elegimos creer.
            </SectionParagraph>
          </FooterMsg>
          <FooterInfo>
            <FooterSocial>
              <ImTwitter />
              <ImInstagram />
            </FooterSocial>
            <FooterParagraph>
              React Summit <TextSpan color='var(--blue)'>@2022</TextSpan> -
              World Cup Edition
            </FooterParagraph>
            <FooterTerms>
              <FooterLink href='#'>Privacidad</FooterLink>
              <FooterLink href='#'>Términos de uso</FooterLink>
            </FooterTerms>
          </FooterInfo>
        </FooterUI>
      </FooterContainer>
    </>
  );
};

export default Footer;
