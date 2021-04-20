import React from 'react'
import resume_doc from '../../assets/pdfs/ResumeSamuelSteinberg.pdf'

const resume = () => {
    return (
        <div className="text-white justify-content-center text-center" style={{height: '100vh', padding: '0 0 7% 0'}}>
            <div>
                <h2 className="display-4">My Resume</h2>
            </div>
            <div className="row h-100 p-4">
                <div className="col col-md-8 offset-md-2">
                    <iframe title="resume" src={resume_doc} style={{border: 'none'}} height="100%" width="100%" />
                </div>
            </div>
        </div>
    )
}

export default React.memo(resume);