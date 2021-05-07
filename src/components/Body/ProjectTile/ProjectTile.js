import React from 'react'
import { Link } from 'react-router-dom';
import classes from './ProjectTile.module.css'

const ProjectTile = ({cover, extension}) => {
    let containerStyles = `col-6 ${classes.ProjectContainer}`;
    let contentStyles = `${classes.Project} text-center`;
    let buttonLinkStyles = `${classes.ViewButton} btn btn-lg`
    let pathConfiguration = `/projects${extension}`
    return (
        <div className={containerStyles} >     
            <div className={contentStyles} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/public-project-images/${cover})`}}>
                <Link to={pathConfiguration} >
                    <button className={buttonLinkStyles}>View Project</button>
                </Link>
            </div>
        </div>
    )
}
export default React.memo(ProjectTile);