import styled from 'styled-components';
import { Section } from '../globalComponents/GlobalComponents';

export const SpeakersSection = styled(Section)`
  flex-direction: column;
  width: 100%;
  gap: max(120px, 10%);
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const SpeakersCardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  gap: 90px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
