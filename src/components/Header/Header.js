import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const header = () => {
    let headerClasses = ["jumbotron", "text-center", classes.Header, "m-0"];
    return (
        <div className={headerClasses.join(' ')}>
            <h2 className="jumbotron-display">Hi, I'm Sam. Welcome to my Portfolio.</h2>
            <p className="sub-header" style={{marginBottom: '0.5rem'}}>
                I am a full-stack developer based in Austin, TX currently working in Angular 8/9 and .Net Core at Charles Schwab.
                My side projects are primarily developed using the MEAN (Mongo, Express, Angular, Node.js) stack with a passion
                for learning about new and emerging technologies. You can view my <Link to="/resume" className={classes.ResumeLink}>resume here</Link>.
            </p>
            <p className="sub-header">
                Click on any tile below to view more information.
            </p>
        </div>
    )
}

export default React.memo(header);