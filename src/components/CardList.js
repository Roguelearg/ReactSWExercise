import React from 'react';
import CardFilms from './CardTypes/CardFilms';
import CardPeople from './CardTypes/CardPeople';
import CardStarships from './CardTypes/CardStarships';
import CardVehicles from './CardTypes/CardVehicles';
import CardSpecies from './CardTypes/CardSpecies';
import CardPlanets from './CardTypes/CardPlanets';

const films = (user) => {
  return (
    <CardFilms
      key   ={user.id}
      title  ={user.title}
      releaseDate ={user.release_date}
      producer ={user.producer}
    />
  );
}

const people = (user) => {
  return (
    <CardPeople
      key   ={user.id}
      name  ={user.name}
      gender ={user.gender}
      homeworld ={user.homeworld}
    />
  );
}

const starships = (user) => {
  return (
    <CardStarships
      key   ={user.id}
      name  ={user.name}
      model ={user.model}
      passengers ={user.passengers}
      crew ={user.crew}
    />
  );
}

const vehicles = (user) => {
  return (
    <CardVehicles
      key   ={user.id}
      name  ={user.name}
      model ={user.model}
      passengers ={user.passengers}
      crew ={user.crew}
    />
  );
}

const species = (user) => {
  return (
    <CardSpecies
      key   ={user.id}
      id    ={user.id}
      name  ={user.name}
      language ={user.language}
      homeworld ={user.homeworld}
      averageHeight ={user.average_height}
      averageLifespan ={user.average_lifespan}
    />
  );
}

const planets = (user) => {
  return (
    <CardPlanets
      key   ={user.id}
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
        return films(user);
        break; // eslint-disable-line no-unreachable
      case 'People':
        return people(user);
        break; // eslint-disable-line no-unreachable
      case 'Starships':
        return starships(user);
        break; // eslint-disable-line no-unreachable
      case 'Vehicles':
        return vehicles(user);
        break; // eslint-disable-line no-unreachable
      case 'Species':
        return species(user);
        break; // eslint-disable-line no-unreachable
      case 'Planets':
        return planets(user);
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
