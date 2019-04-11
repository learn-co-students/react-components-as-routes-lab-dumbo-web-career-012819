import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const allActors = actors.map(actor => {
  	return (
  	  <div>
  	    <h3>Name: {actor.name}</h3>
  	    <h4>Movies: </h4>
  	    <ul>
  	      {actor.movies.map(movie => {
  	      	return (
  	      	  <li>{movie}</li>
  	      	)
  	      })}
  	    </ul>
  	  </div>
  	)
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
