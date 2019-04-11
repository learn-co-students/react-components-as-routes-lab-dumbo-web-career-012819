import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const movies = (movies) => {
    return movies.map(movie => <li>{movie}</li>)
  }

  const actorsMap = () => {
    return actors.map(actor => {
      return (
        <div className='actor'>
          <h1>{actor.name}</h1>
          <ul>{movies(actor.movies)}</ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsMap()}
    </div>
  );
};

export default Actors;
