import React from 'react';
import classes from './Footer.module.css';
import linkedin_icon from '../../../assets/images/linkedin.png';
import github_logo from '../../../assets/images/github.png';
import gmail_icon from '../../../assets/images/gmail_icon.png'

const footer = () => {
    let navClass = `navbar navbar-dark bg-dark text-info ${classes.Footer}`
    const onClickCopy = () => {
        console.log("copied: spaulsteinberg@gmail.com")
    }
    return (
        <div className={classes.NavContainer}>
            <nav className={navClass}>
                <span><img src={gmail_icon} alt="gmail.png" className="mx-2" onClick={onClickCopy}/></span>
                <a className={classes.NavLink} href="https://www.linkedin.com/in/samuel-steinberg-3a028b156/" target="_blank" rel="noreferrer">
                    <img src={linkedin_icon} alt="linkedin512.png" className="mx-2"/>
                </a>
                <a className={classes.NavLink} href="https://github.com/spaulsteinberg" target="_blank" rel="noreferrer">
                    <img src={github_logo} alt="github_logo.png" className="mx-2"/>
                </a>
            </nav>
        </div>
    )
}

export default React.memo(footer);