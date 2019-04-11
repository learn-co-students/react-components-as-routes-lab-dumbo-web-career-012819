import React from 'react';
import { actors } from '../data';
import { generateList } from '../helpers'

const Actors = () => {

  const generateActors = () => {
    return actors.map(actor => {
      return (
        <div>
          <h1>{actor.name}</h1>
          {generateList(actor.movies)}
        </div>
      )
    })
  }

  return (
    <React.Fragment>
     <h1>Actors Page</h1>
      {generateActors()}
    </React.Fragment>
  );
};

export default Actors;
