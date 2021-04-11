import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css';

const navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark justify-content-start">
                <NavLink activeClassName={classes.NavlinkActive} className="navbar-brand" to="/">Home</NavLink>
                <NavLink activeClassName={classes.NavlinkActive} className="navbar-brand" to="/about">About</NavLink>
                <NavLink activeClassName={classes.NavlinkActive} className="navbar-brand" to="#1">Contact</NavLink>
                <NavLink activeClassName={classes.NavlinkActive} className="navbar-brand" to="/resume">Resume</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default navbar;