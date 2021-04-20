import React from 'react'
import resume_doc from '../../../assets/pdfs/ResumeSamuelSteinberg.pdf'
import styles from './Resume.module.css'

const resume = () => {
    return (
        <div className={styles.Resume}>
            <div>
                <h2 className="display-4">My Resume</h2>
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