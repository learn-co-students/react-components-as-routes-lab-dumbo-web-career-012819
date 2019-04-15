import React from 'react';
import { actors } from '../data';

const Actors = () => {

  let allActors = actors.map(actor => {
    return (
      <div className="actor">
        <h1>{actor.name}</h1>
        <ul>

        {actor.movies.map(mov => {
          return <li>{mov}</li>
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
