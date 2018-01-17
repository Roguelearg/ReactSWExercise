import React from 'react';

const CardFilms = ({ title, releaseDate, producer }) => {
  return(
   <div className='tc bg-light-green dib br3 ma3 pa2 grow bw2 shadow-5'>
    <h2>{title}</h2>
    <p>{releaseDate}</p>
    <p>{producer}</p>
   </div>
  );
}

export default CardFilms;
