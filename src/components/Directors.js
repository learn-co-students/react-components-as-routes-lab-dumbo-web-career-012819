import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let allDirectors = directors.map(dir => {
    return (
      <div>
        <h1>{dir.name}</h1>
        <ul>
          {
            dir.movies.map(mov => {
              return <li>{mov}</li>
            })
          }
        </ul>
      </div>
    )
  })

  return (
    <div>
    <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
}

export default Directors
