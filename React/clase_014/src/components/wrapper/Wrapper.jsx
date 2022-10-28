import React from 'react';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  max-width: 1100px;
  /* background: red; */
  width: 90%;
  height: calc(100vh - 94px);
  margin: 0 auto;
`;

const Wrapper = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
