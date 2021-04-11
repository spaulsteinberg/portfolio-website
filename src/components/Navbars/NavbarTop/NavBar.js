import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css';

const navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark justify-content-start">
                <NavLink exact activeStyle={{color: 'red'}} activeClassName={classes.NavlinkActive} className="navbar-brand current-page" to="/">Home</NavLink>
                <NavLink activeStyle={{color: 'red'}} className="navbar-brand current-page" to="/about">About</NavLink>
                <NavLink activeStyle={{color: 'red'}} className="navbar-brand current-page" to="/contact">Contact</NavLink>
                <NavLink activeStyle={{color: 'red'}} className="navbar-brand current-page" to="/resume">Resume</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default navbar;