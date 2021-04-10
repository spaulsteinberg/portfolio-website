import React from 'react'

const header = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark justify-content-start">
                <a className="navbar-brand" href="#1">Home</a>
                <a className="navbar-brand" href="#1">About</a>
                <a className="navbar-brand" href="#1">Contact</a>
                <a className="navbar-brand" href="#1">Resume</a>
            </nav>
        </React.Fragment>
    )
}

export default header;