import styled from 'styled-components';
import { Section } from '../globalComponents/GlobalComponents';

export const HeroSection = styled(Section)`
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 150px;
`;

export const HeroSlogan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 500px;
`;

export const HeroTextContainer = styled.div`
  max-width: max(60%, 500px);
`;

export const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 65px;
  line-height: 65px;
`;

export const HeroParagraph = styled.p`
  font-size: 18px;
  font-weight: 300px;
  line-height: 30px;
`;

export const HeroImage = styled.img`
  height: 400px;
  margin-bottom: 20px;
`;
