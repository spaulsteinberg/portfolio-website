import React from 'react'
import resume_doc from '../../../assets/pdfs/ResumeSamuelSteinberg.pdf'
import styles from './Resume.module.css'

const resume = () => {
    const resumePath = `${process.env.PUBLIC_URL}/pdfs/ResumeSamuelSteinberg.pdf`;
    return (
        <div className={styles.Resume}>
            <div className="m-3">
                <h2 className="display-3">My Resume</h2>
                <p className="project-body">Can't see the frame or just want to download it? Click
                    <span> </span>
                    <a href={resumePath} download="samuel_steinberg_resume" style={{textDecoration: 'underline'}}>here</a>
                </p>
            </div>
            <div className="row h-100 p-4">
                <div className="col col-md-8 offset-md-2">
                    <iframe className={styles.ResumeIFrame} id="viewer" title="resume" src={resume_doc} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(resume);