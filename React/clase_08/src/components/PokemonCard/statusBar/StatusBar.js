import React from 'react';
import {
  StatusBarActiveStyled,
  StatusBarContainerStyled,
  StatusBarLineStyled,
  StatusBarTitleStyled,
} from './StatusBarStyles';

// Che flaco te van a props
const StatusBar = props => {
  // desestructuramos
  const {
    base_stat,
    stat: { name },
    firstType,
  } = props;

  return (
    <StatusBarContainerStyled>
      <StatusBarTitleStyled>{name}</StatusBarTitleStyled>
      <StatusBarLineStyled>
        <StatusBarActiveStyled
          power={base_stat}
          type={firstType}
        ></StatusBarActiveStyled>
      </StatusBarLineStyled>
    </StatusBarContainerStyled>
  );
};

export default StatusBar;
