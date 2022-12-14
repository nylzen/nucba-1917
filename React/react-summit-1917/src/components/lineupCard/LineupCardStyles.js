import styled from 'styled-components';

export const CardUI = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  padding: 0px 30px;
  width: min(90vw, 700px);
  height: 150px;
  background-color: var(--dark-blue);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 200px;
    padding: 30px 10px;
    text-align: center;
    gap: 10px;
    width: 80%;
  }
`;

export const CardTime = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  max-width: 80%;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 24px;
`;
