import styled, { css } from 'styled-components';

export const CounterStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CounterSpanStyled = styled.span`
  padding: 10px;
  min-width: 100px;
  width: auto;
  font-size: 30px;
  text-align: center;
  color: white;
`;

export const CounterButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 3px;
    font-size: 20px;
    color: white;
  }
`;

export const CounterButtonStyled = styled.button`
  padding: 10px 30px;
  background: #4747cb;
  border: 1px solid white;
  color: #fff;

  ${props =>
    props.last &&
    css`
      border-top-right-radius: 9px;
      border-bottom-right-radius: 9px;
    `}
  ${props =>
    props.first &&
    css`
      border-top-left-radius: 9px;
      border-bottom-left-radius: 9px;
    `}
  cursor: pointer;
`;
