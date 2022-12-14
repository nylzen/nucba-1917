import styled from 'styled-components';
import { Section } from '../globalComponents/GlobalComponents';

export const LineupSection = styled(Section)`
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;

export const LineupTitleContainer = styled.div`
  text-align: center;
  width: 70%;
`;

export const LineupDate = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  max-width: 80%;
`;

export const LineupCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
