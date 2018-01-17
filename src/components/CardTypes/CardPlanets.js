import React from 'react';

const CardPlanets = ({ name, climate, population }) => {
  return(
   <div className='tc bg-light-green dib br3 ma3 pa2 grow bw2 shadow-5'>
    <h2>{name}</h2>
    <p>{climate}</p>
    <p>{population}</p>
   </div>
  );
}

export default CardPlanets;
