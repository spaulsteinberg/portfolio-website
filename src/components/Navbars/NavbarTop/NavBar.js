import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css';

const navbar = ({modalClick}) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark justify-content-start">
                <NavLink exact activeStyle={{color: '#fe9677'}} activeClassName={classes.NavlinkActive} className="navbar-brand current-page" to="/">Portfolio</NavLink>
                <NavLink activeStyle={{color: '#fe9677'}} className="navbar-brand current-page" to="/about">About</NavLink>
                <button className={classes.NavButton} onClick={modalClick}>Contact</button>
                <NavLink activeStyle={{color: '#fe9677'}} className="navbar-brand current-page" to="/resume">Resume</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default React.memo(navbar);