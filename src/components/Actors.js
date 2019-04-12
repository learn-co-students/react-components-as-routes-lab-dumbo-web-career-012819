import React from 'react';
import { actors } from '../data';

const Actors = () => {

    const display =
         actors.map(actor => {
            return (<div>
               <h1>{actor.name}</h1>
               <ul>
                 { actor.movies.map(movie=>{
                   return <li>{movie}</li>
             })}
               </ul>
               </div>
           )
        })



  return (
    <div>
        {display}
    </div>
  );
};

export default Actors;
