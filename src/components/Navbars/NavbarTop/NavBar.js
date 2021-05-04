import React from 'react';
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css';

const navbar = ({modalClick}) => {
    const navBarStyles = `navbar navbar-dark ${styles.NavBar}`
    return (
        <React.Fragment>
            <nav className={navBarStyles}>
                <NavLink exact activeStyle={{color: '#fe9677'}} activeClassName={styles.NavlinkActive} className="navbar-brand current-page mx-2" to="/">Portfolio</NavLink>
                <NavLink activeStyle={{color: '#fe9677'}} className="navbar-brand current-page mx-2" to="/about">About</NavLink>
                <button className={styles.NavButton} onClick={modalClick} id="contact-nav-top">Contact</button>
                <NavLink activeStyle={{color: '#fe9677'}} className="navbar-brand current-page mx-2" to="/resume">Resume</NavLink>
            </nav>
        </React.Fragment>
    )
}

export default React.memo(navbar);