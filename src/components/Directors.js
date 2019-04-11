import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const movies = (movies) => {
    return movies.map(movie => <li>{movie}</li>)
  }

  const directorsMap = () => {
    return directors.map(director => {
      return (
        <div>
          <h1>{director.name}</h1>
          <ul>{movies(director.movies)}</ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directorsMap()}
    </div>
  );
}

export default Directors
