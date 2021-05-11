import React from 'react';
import about_photo from '../../../assets/images/abt_page_headshot3.jpeg';
import classes from './About.module.css';

const about = () => {
    let imageClass = `col-md-5 text-center ${classes.AboutImage}`;
    let textClass = `lead project-body ${classes.AboutText}`;
    const imageBootstrapStyles = "img-fluid rounded-circle";
    return (
        <React.Fragment>
            <div className="row justify-content-center mt-3 mb-4">
                <div className={imageClass}>
                    <img src={about_photo} alt="about_photo.png" className={imageBootstrapStyles}/>
                </div>
            </div>
            <div className="row justify-content-center">
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