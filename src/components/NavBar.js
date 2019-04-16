import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const link = {
        width: '50px',
        padding: '5px',
        margin: '0 6px 6px',
        background: 'green',
        textDecoration: 'none',
        color: 'black'
    }
  return (
    <div className="navbar">
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/actors" >Actors</NavLink>
        <NavLink to="/directors" >Directors</NavLink>
        <NavLink to="/movies" >Movies</NavLink>
    </div>
  );
};

export default NavBar;
