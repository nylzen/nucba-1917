import React from 'react';
import { SectionParagraph } from '../globalComponents/GlobalComponents';
import { CardInfo, CardTime, CardTitle, CardUI } from './LineupCardStyles';

const LineupCard = props => {
  const { title, time, speakers } = props;
  return (
    <>
      <CardUI>
        <CardTime>{time}</CardTime>
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <SectionParagraph fontSize='15px'>{speakers}</SectionParagraph>
        </CardInfo>
      </CardUI>
    </>
  );
};

export default LineupCard;
