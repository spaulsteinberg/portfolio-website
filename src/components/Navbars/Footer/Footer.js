import React from 'react';
import classes from './Footer.module.css';
import linkedin_icon from '../../../assets/images/linkedin_icon.png';
import github_logo from '../../../assets/images/github_full.png';
import gmail_icon from '../../../assets/images/gmail_icon.png'

const footer = () => {
    let navClass = `navbar navbar-bottom navbar-dark bg-dark text-info ${classes.Footer}`
    return (
        <div className={classes.NavContainer}>
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
        </div>
    )
}

export default React.memo(footer);