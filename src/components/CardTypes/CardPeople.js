import React from 'react';

const CardPeople = ({ name, gender, homeworld}) => {
  return(
   <div className='tc bg-light-green dib br3 ma3 pa2 grow bw2 shadow-5'>
    <h2>{name}</h2>
    <p>{gender}</p>
    <p>{homeworld}</p>
   </div>
  );
}

export default CardPeople;
