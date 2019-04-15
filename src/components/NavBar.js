import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/actors" exact >Actors</NavLink>
      <NavLink to="/directors" exact >Directors</NavLink>
      <NavLink to="/movies" exact >Movies</NavLink>
      <NavLink to="/" exact >Home</NavLink>
      {/*{code here}*/}
    </div>
  );



};

export default NavBar;
