import styled from 'styled-components';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 60px 0;
  max-width: 1300px;
`;

export const Button = styled.button`
  background: var(--dark-blue);
  border: 0 solid black;
  outline: none;
  width: 180px;
  height: 40px;
  color: white;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.4s linear;

  &:hover {
    background: var(--blue);
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 700;
  font-size: 42px;
`;

export const SectionParagraph = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: 300;
`;

export const TextSpan = styled.span`
  color: ${props => props.color};
  font-weight: 600;
  font-size: ${props => props.size};
`;

export const Divider = styled.div`
  width: min(90%, 600px);
  margin: 30px;
  height: 3px;
  background-color: var(--blue);
`;
