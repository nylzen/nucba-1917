import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed #4747ff;
  height: fit-content;
  width: 30%;
  padding: 2rem;
  margin-top: 0.5rem;
  border-radius: 10px;

  & h3 {
    background-color: #4747ff;
  }

  /* & :hover {
    background: greenyellow;
  } */

  :hover {
    border: 1px solid crimson;
  }
`;

export const StyledH4 = styled.h4`
  font-size: 1.5rem;
  color: #b6baf4;
`;

export const StyledP = styled.p`
  font-size: 1.25rem;
  color: var(--color-secondary);
`;

export const StyledButton = styled.button`
  background-color: ${({ color }) => (color ? '#4747ff' : 'white')};
  color: ${({ color }) => (color ? 'white' : '#4747ff')};
  padding: 1rem 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;
