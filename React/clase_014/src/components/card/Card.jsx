import React from 'react';

const Card = props => {
  const { image, name, status, species } = props;
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p style={{ color: 'green' }}>{status}</p>
      <p>{species}</p>
    </div>
  );
};

export default Card;
