import React from 'react';
import head_photo from '../../../assets/images/abt_page_headshot3.jpeg';
import capitol_summer_2020 from '../../../assets/images/dc_pic.jpg';
import ferrari_lv_2017 from '../../../assets/images/vegas_race_ferrari.jpg';
import atl_2019 from '../../../assets/images/atlanta_2019.jpg';
import classes from './About.module.css';

const about = () => {
    let imageClass = `col-md-5 offset-md-1 ${classes.AboutImage}`;
    let textClass = `col-md-4 lead ${classes.AboutText}`;
    console.log(window.screen.height, window.screen.width)
    let imageSizes = {
        headshot: {
            height: window.screen.height * .369,
            width: window.screen.width * .18
        },
        capitol: {
            height: window.screen.height * .22,
            width: window.screen.width * .13,
            top: 0
        },
        ferrari: {
            height: window.screen.height * .23,
            width: window.screen.width * .31
        },
        atlanta: {
            height: window.screen.height * .149,
            width: window.screen.width * .13
        }
    }
    const imageBootstrapStyles = "img-fluid img-thumbnail rounded";
    return (
        <React.Fragment>
            <div className="row text-center justify-content-center text-white">
                <h2 className="display-4 m-4">About Me</h2>
            </div>
            <div className="row text-white mt-3">
                <div className={imageClass}>
                    <div className="row">
                        <img src={head_photo} alt="sam_steinberg_photo.jpg" className={imageBootstrapStyles} style={imageSizes.headshot}/>
                        <div className="col-5 p-0">
                            <img src={capitol_summer_2020} alt="capitol_pic_2020.jpg" className={imageBootstrapStyles} style={imageSizes.capitol} />
                            <img src={atl_2019} alt="atlanta2019.jpg" className={imageBootstrapStyles} style={imageSizes.atlanta} />
                        </div>
                    </div>
                    <div className="row">
                        <img src={ferrari_lv_2017} alt="ferrari458.jpg" className={imageBootstrapStyles} style={imageSizes.ferrari} />
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