import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const header = () => {
    let headerClasses = ["jumbotron", "text-center", classes.Header, "m-0"];
    return (
        <div className={headerClasses.join(' ')}>
            <h2 className="display-3">Hi, I'm Sam. Welcome to my portfolio.</h2>
            <br />
            <h3 className={classes.SubHeader}>
                I am a full-stack developer based in Austin, TX currently working in Angular 7/8/9 and .Net Core.
                My side projects are primarily developed using the MEAN (Mongo, Express, Angular, Node.js) stack with a passion
                for learning about new and emerging technologies. You can view my <NavLink to="/resume" className={classes.ResumeLink}>resume here</NavLink>.
            </h3>
        </div>
    )
}

export default React.memo(header);