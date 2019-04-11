import React from 'react';
import { movies } from '../data';
import { generateList } from '../helpers'

const Movies = () => {

  // const generateGenreList = (list) => {
  //   const genreComponents = list.map(genre => <li>{genre}</li>)
  //   return <ul>{genreComponents}</ul>
  // }

  const generateMovieComponents = () => {
    return movies.map(movie => {
      return (
        <div>
          <h1>{movie.title}</h1>
          <h3>Time: {movie.time}</h3>
          {generateList(movie.genres)}
        </div>
      )
    })
  }


  return (
    <React.Fragment>
    <h1>Movies Page</h1>
        {generateMovieComponents()}
    </ React.Fragment>
  );
};

export default Movies;
