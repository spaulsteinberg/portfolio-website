import React from 'react';
import head_photo from '../../../assets/images/abt_page_headshot3.jpeg';
import classes from './About.module.css';

const about = () => {
    let imageClass = `col-md-4 ${classes.AboutImage}`;
    let textClass = `col-md-3 ${classes.AboutText}`;
    return (
        <React.Fragment>
            <div className="row text-center justify-content-center text-white">
                <h2 className="display-4 m-3">About Me</h2>
            </div>
            <div className="row text-white">
                <div className={imageClass}>
                    <img src={head_photo} alt="sam_steinberg_photo.jpg" className="img-fluid img-thumbnail rounded"/>
                </div>
                <div className={textClass}>
                    <p>
                        I am currently a full-stack developer for the Charles Schwab Corporation,
                        using Angular paired with .NET Core along with both SQL and Mongo databases.
                    </p>
                    <p>
                        Before Schwab, I attended the University of Tennessee, where I graduated Magna Cum Laude with a B.S. in Computer Science
                        along with a minor In Cybersecurity.
                    </p>
                    <p>
                        I am passionate about full-stack development and a self-taught web developer.
                        Always wanting to 'make stuff happen when users click the screen', I began learning
                        interactive web code after my college graduation, though began CSS and HTML for fun
                        a few years earlier. Soon after came writing custom API's using the REST architectural pattern.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(about);