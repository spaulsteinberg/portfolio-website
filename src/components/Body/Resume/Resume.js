import React from 'react'
import resume_doc from '../../../assets/pdfs/ResumeSamuelSteinberg.pdf'
import styles from './Resume.module.css'

const resume = () => {
    const resumePath = `${process.env.PUBLIC_URL}/pdfs/ResumeSamuelSteinberg.pdf`;
    const frameContainerStyles = `col col-md-8 offset-md-2 ${styles.FrameContainer}`;
    return (
        <div className={styles.Resume}>
            <div className="m-3">
                <h2 className="jumbotron-display">My Resume</h2>
                <p className="project-body">Can't see the frame or just want to download it? Click
                    <span> </span>
                    <a href={resumePath} download="samuel_steinberg_resume" style={{textDecoration: 'underline'}}>here.</a>
                <span> </span>Note that smaller screens will not be able to view the pdf in-browser.
                </p>
            </div>
            <div className="row">
                <div className={frameContainerStyles}>
                    <iframe className={styles.ResumeIFrame} id="viewer" title="resume" src={resume_doc} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(resume);