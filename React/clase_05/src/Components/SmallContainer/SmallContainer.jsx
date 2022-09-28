import React from 'react';
import styled from 'styled-components';

const SmallWrapper = styled.div`
  height: 50%;
  width: 75%;
  padding: 2rem;
  border: 1px dashed var(--primary);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SmallContainer = props => {
  return <SmallWrapper>{props.children}</SmallWrapper>;
};

export default SmallContainer;
