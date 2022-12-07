import styled from 'styled-components';
import { Section } from '../globalComponents/GlobalComponents';

export const AboutSection = styled(Section)`
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const AboutImage = styled.div`
  background-image: url(images/about.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 380px;
  width: min(430px, 90%);
  border-radius: 5px;
`;

export const AboutContent = styled.div`
  width: min(430px, 90%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const AboutCardsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--dark-blue);
  height: 70px;
  width: 120px;
  border-radius: 5px;
  span {
    font-weight: 700;
    font-size: 20px;
  }
`;
