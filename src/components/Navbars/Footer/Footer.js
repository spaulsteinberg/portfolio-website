import React from 'react';
import NavIcons from '../NavIcons/NavIcons';
import styles from './Footer.module.css';

const footer = () => {
    let navClass = `navbar navbar-dark bg-dark text-info ${styles.Footer}`;
    return (
        <div className={styles.NavContainer}>
            <nav className={navClass} role="navigation">
                <NavIcons />
            </nav>
        </div>
    )
}

export default React.memo(footer);