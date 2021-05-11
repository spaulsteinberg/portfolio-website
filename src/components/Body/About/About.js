import React from 'react';
import about_photo from '../../../assets/images/about.PNG';
import classes from './About.module.css';

const about = () => {
    let imageClass = `col-md-5 offset-md-1 ${classes.AboutImage}`;
    let textClass = `col-md-4 lead project-body ${classes.AboutText}`;
    const imageBootstrapStyles = "img-fluid img-thumbnail rounded";
    return (
        <React.Fragment>
            <div className="row text-center justify-content-center text-white">
                <h2 className="jumbotron-display m-4">About Me</h2>
            </div>
            <div className="row text-white mt-3">
                <div className={imageClass}>
                    <div className="row">
                        <div className="col-6">
                            <img src={about_photo} alt="about_photo.png" className={imageBootstrapStyles} height="50vh"/>
                        </div>
                    </div>
                </div>
                <div className={textClass}>
                    <p>
                        I am currently a full-stack developer for the Charles Schwab Corporation,
                        using Angular paired with .NET Core and both SQL and Mongo databases. I graduated from their 
                        NERD program, where my NERDathon team achieved 3rd place out of 15 teams.
                    </p>
                    <p>
                        Before Schwab, I grew up between Palo Alto, CA and Bethesda, MD prior to attending the University of Tennessee, where I graduated Magna Cum Laude with a B.S. in Computer Science
                        and a minor in Cybersecurity. I was also a member of the National Society of Leadership and Success.
                    </p>
                    <p>
                        I am passionate about full-stack development and jump on any opportunity to dive deeper into it.
                        My portfolio here showcases my personal projects, and I have also been able to deliver applications
                        in my work that have allowed me the opportunity to consistently learn new skills and tips as a developer.
                        Outside of work, I enjoy cars, sports, food, and the outdoors.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(about);