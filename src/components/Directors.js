import React from 'react';
import { directors } from '../data';

const Directors = () => {
    const display =
         directors.map(director => {
            return (<div>
               <h1>{director.name}</h1>
               <ul>
                 { director.movies.map(movie=>{
                   return <li>{movie}</li>
             })}
               </ul>
               </div>
           )
        })
  return (
    <div>
      <h1>Directors</h1>
      {display}
    </div>
  );
}

export default Directors
