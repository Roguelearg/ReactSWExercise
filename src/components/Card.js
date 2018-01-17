import React from 'react';

const Card = ({ id, name, email }) => {
  return(
   <div className='tc bg-light-green dib br3 ma3 pa2 grow bw2 shadow-5'>
    <img alt='Robot'  src={`https://robohash.org/${id}?200x2000`} />
    <div>
     <h2>{name}</h2>
     <p>{email}</p>
    </div>
   </div>
  );
}

export default Card;
