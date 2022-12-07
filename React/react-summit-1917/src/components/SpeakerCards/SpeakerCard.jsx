import React from 'react';
import { SectionParagraph } from '../globalComponents/GlobalComponents';
import { CardContent, CardImg, CardTitle, CardUI } from './SpeakerCardStyles';

const SpeakerCard = props => {
  const { img, name, description } = props;
  return (
    <>
      <CardUI>
        <CardImg img={img} />
        <CardContent>
          <CardTitle>{name}</CardTitle>
          <SectionParagraph fontSize='15px'>{description}</SectionParagraph>
        </CardContent>
      </CardUI>
    </>
  );
};

export default SpeakerCard;
