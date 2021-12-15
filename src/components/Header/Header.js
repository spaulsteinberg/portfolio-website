import React from 'react';
import classes from './Header.module.css';

const header = () => {
    let headerClasses = ["jumbotron", "text-center", classes.Header, "m-0"];
    return (
        <div className={headerClasses.join(' ')}>
            <h2 className="jumbotron-display">Hi, I'm Sam. Welcome to my Portfolio.</h2>
            <p className="sub-header" style={{marginBottom: '0.5rem'}}>
                I am a full-stack developer based in Austin, TX working for IBM.
                I enjoy learning new programming languages, frameworks, libraries, and techniques.
                Feel free to contact me directly through the modal or by phone/email.
            </p>
            <p className="sub-header">
                Click any project tile below to view more information.
            </p>
        </div>
    )
}

export default React.memo(header);