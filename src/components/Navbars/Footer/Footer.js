import React from 'react';
import classes from './Footer.module.css';
import linkedin_icon from '../../../assets/linkedin_icon.png';
import github_logo from '../../../assets/github_full.png';
import gmail_icon from '../../../assets/gmail_icon.png'

const footer = () => {
    let navClass = `navbar navbar-bottom navbar-dark bg-dark justify-space-between text-info ${classes.Footer}`
    return (
        <nav className={navClass}>
            <span><img src={gmail_icon} alt="gmail.png" className="mx-2" />spaulsteinberg@gmail.com</span>
            <a className={classes.NavLink} href="https://www.linkedin.com/in/samuel-steinberg-3a028b156/" target="_blank" rel="noreferrer">
                <img src={linkedin_icon} alt="linkedin512.png" className="mx-2"/>
                LinkedIn
            </a>
            <a className={classes.NavLink} href="https://github.com/spaulsteinberg" target="_blank" rel="noreferrer">
                <img src={github_logo} alt="github_logo.png" className="mx-2"/>
                spaulsteinberg
            </a>
        </nav>
    )
}

export default footer;