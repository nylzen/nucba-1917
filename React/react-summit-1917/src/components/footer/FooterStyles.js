import styled from 'styled-components';
import { SectionParagraph } from '../globalComponents/GlobalComponents';

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterUI = styled.footer`
  display: flex;
  justify-content: space-around;
  max-width: 1300px;
  flex-wrap: wrap;
  width: 100%;
  gap: 70px;
  padding: 30px;

  @media (max-width: 992px) {
    gap: 40px;
  }
`;

export const FooterMsg = styled.div`
  text-align: justify;
  font-weight: 700;
  font-size: 24px;
  max-width: 450px;

  @media (max-width: 992px) {
    max-width: 600px;
    text-align: center;
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  font-size: 14px;
  min-height: 100px;

  @media (max-width: 992px) {
    align-items: center;
    gap: 20px;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterTerms = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 992px) {
    justify-content: center;
    text-align: center;
  }
`;

export const FooterParagraph = styled(SectionParagraph)`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const FooterLink = styled.a`
  font-weight: 300;
`;
