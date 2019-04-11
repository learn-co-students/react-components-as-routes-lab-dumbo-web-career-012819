import React from 'react';
import { directors } from '../data';
import { generateList } from '../helpers'

const Directors = () => {

  const generateDirectors = () => {
    return directors.map(director => {
      return (
        <div>
          <h1>{director.name}</h1>
          { generateList(director.movies) }
        </div>
      )
    })
  }

  return (
    <React.Fragment>
    <h1>Directors Page</h1>
      {generateDirectors()}
    </React.Fragment>
  );
}

export default Directors
