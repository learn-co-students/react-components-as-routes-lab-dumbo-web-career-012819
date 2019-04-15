import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let allMovies = movies.map(mov => {
    return (
      <div className="movie">
        {mov.title}
        {mov.time}
        <ul>
        {mov.genres.map(genre => {
          return <li>{genre}</li>
        })}
        </ul>

      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
        {allMovies}
    </div>
  );
};

export default Movies;
