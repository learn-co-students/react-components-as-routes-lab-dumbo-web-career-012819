import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const genres = (genres) => {
    return genres.map(genre => <li>{genre}</li>)
  }

  const moviesMap = () => {
    return movies.map(movie => {
      return(
        <div>
          <h1>{movie.title}</h1>
          <h2>{movie.time}</h2>
          <ul>{genres(movie.genres)}</ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {moviesMap()}
    </div>
  );
};

export default Movies;
