import React from 'react';

const CardStarships = ({ name, model, passengers, crew }) => {
  return(
   <div className='tc bg-light-green dib br3 ma3 pa2 grow bw2 shadow-5'>
    <h2>{name}</h2>
    <h3>{model}</h3>
    <p>{passengers}</p>
    <p>{crew}</p>
   </div>
  );
}

export default CardStarships;
