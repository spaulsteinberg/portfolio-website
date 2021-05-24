import React from 'react';
import { NavLink } from 'react-router-dom'
import NavIcons from '../NavIcons/NavIcons';
import styles from './NavBar.module.css';

const navbar = ({modalClick}) => {
    const navBarStyles = `navbar navbar-expand-lg navbar-dark ${styles.NavBar}`;
    const togglerStyles = `${styles.Toggler} navbar-toggler`
    return (
        <React.Fragment>
            <nav className={navBarStyles}>
                <button className={togglerStyles} type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{height: '1rem', width: '1rem'}}></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact activeStyle={{color: '#fe9677'}} activeClassName={styles.NavlinkActive} className="navbar-brand current-page mx-2" to="/">Portfolio</NavLink>
                        <NavLink activeStyle={{color: '#fe9677'}} className="navbar-brand current-page mx-2" to="/about">About</NavLink>
                        <button className={styles.NavButton} onClick={modalClick} id="contact-nav-top">Contact</button>
                        <NavLink activeStyle={{color: '#fe9677'}} className="navbar-brand current-page mx-2" to="/resume">Resume</NavLink>
                    </div>
                    <div className="navbar-nav">
                        <span><NavIcons /></span>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default React.memo(navbar);