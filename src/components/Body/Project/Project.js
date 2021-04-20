import React from 'react'
import classes from './Project.module.css'

const Project = ({title, cover, description, stack, photos}) => {
    let containerStyles = `col col-md-6 ${classes.ProjectContainer}`;
    let contentStyles = `${classes.Project} text-center`;
    let buttonLinkStyles = `${classes.ViewButton} btn btn-lg`
    return (
        <div className={containerStyles} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/public-project-images/${cover})`}}>     
            <div className={contentStyles}>
                <button className={buttonLinkStyles}>View Project</button>
            </div>
        </div>
    )
}
export default Project;