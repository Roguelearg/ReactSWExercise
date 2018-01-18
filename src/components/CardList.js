import React from 'react';
import CardFilms from './CardTypes/CardFilms';
import CardPeople from './CardTypes/CardPeople';
import CardStarships from './CardTypes/CardStarships';
import CardVehicles from './CardTypes/CardVehicles';
import CardSpecies from './CardTypes/CardSpecies';
import CardPlanets from './CardTypes/CardPlanets';

const films = (user, i) => {
  return (
    <CardFilms
      key   ={i}
      title  ={user.title}
      releaseDate ={user.release_date}
      producer ={user.producer}
    />
  );
}

const people = (user, i) => {
  return (
    <CardPeople
      key   ={i}
      name  ={user.name}
      gender ={user.gender}
      homeworld ={user.homeworld}
    />
  );
}

const starships = (user, i) => {
  return (
    <CardStarships
      key   ={i}
      name  ={user.name}
      model ={user.model}
      passengers ={user.passengers}
      crew ={user.crew}
    />
  );
}

const vehicles = (user, i) => {
  return (
    <CardVehicles
      key   ={i}
      name  ={user.name}
      model ={user.model}
      passengers ={user.passengers}
      crew ={user.crew}
    />
  );
}

const species = (user, i) => {
  return (
    <CardSpecies
      key   ={i}
      name  ={user.name}
      language ={user.language}
      homeworld ={user.homeworld}
      averageHeight ={user.average_height}
      averageLifespan ={user.average_lifespan}
    />
  );
}

const planets = (user, i) => {
  return (
    <CardPlanets
      key   ={i}
      name  ={user.name}
      climate ={user.climate}
      population ={user.population}
    />
  );
}

const CardList = ({ cardArray, typeArray }) => {
  // debugger;
  const CardArray = cardArray.map((user, i) => {
    switch(typeArray) {
      case 'Films':
        return films(user, i);
        break; // eslint-disable-line no-unreachable
      case 'People':
        return people(user, i);
        break; // eslint-disable-line no-unreachable
      case 'Starships':
        return starships(user, i);
        break; // eslint-disable-line no-unreachable
      case 'Vehicles':
        return vehicles(user, i);
        break; // eslint-disable-line no-unreachable
      case 'Species':
        return species(user, i);
        break; // eslint-disable-line no-unreachable
      case 'Planets':
        return planets(user, i);
        break; // eslint-disable-line no-unreachable
      default:
        return ([]);
    }
  })
  return(
    <div>
      {CardArray}
    </div>
  );
}

export default CardList;
