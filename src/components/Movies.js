import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const allMovies = movies.map(movie => {
  	return (
  	  <div>
  	  	<h3>Name: {movie.title}</h3>
  	  	<p>Time: {movie.time}</p>
  	  	<h4>Genres:</h4>
  	  	<ul>
  	  	{movie.genres.map(genre => {
  	  	  return (
  	  	  	  <li>{genre}</li>
  	  	  )
  	  	})}
  	  	</ul>
  	  </div>
  	)
  })

  console.log(allMovies)

  return (
    <div>
       <h1>Movies Page</h1>
       {allMovies}
    </div>
  );
};

export default Movies;
