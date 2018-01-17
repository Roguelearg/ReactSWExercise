import React from 'react';

const CardSpecies = ({ name, language, homeworld, averageHeight, averageLifespan }) => {
  return(
   <div className='tc bg-light-green dib br3 ma3 pa2 grow bw2 shadow-5'>
    <h2>{name}</h2>
    <p>{language}</p>
    <p>{homeworld}</p>
    <p>{averageHeight}</p>
    <p>{averageLifespan}</p>
   </div>
  );
}

export default CardSpecies;
