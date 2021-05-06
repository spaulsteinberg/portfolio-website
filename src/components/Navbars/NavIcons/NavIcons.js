import React from 'react';
import styles from './NavIcons.module.css';
import linkedin_icon from '../../../assets/images/linkedin.png';
import github_logo from '../../../assets/images/github.png';
import gmail_icon from '../../../assets/images/gmail_icon.png'

const NavIcons = () => {
    return (
        <React.Fragment>
            <a target="_blank" className={styles.NavLink} href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=sampaulsteinberg@gmail.com" rel="noreferrer">
                <img src={gmail_icon} alt="gmail.png" />
            </a>
            <a className={styles.NavLink} href="https://www.linkedin.com/in/samuel-steinberg-3a028b156/" target="_blank" rel="noreferrer">
                <img src={linkedin_icon} alt="linkedin512.png" />
            </a>
            <a className={styles.NavLink} href="https://github.com/spaulsteinberg" target="_blank" rel="noreferrer">
                <img src={github_logo} alt="github_logo.png" />
            </a>
        </React.Fragment>
    )
}

export default React.memo(NavIcons);