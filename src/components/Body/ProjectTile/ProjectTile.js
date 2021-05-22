import React from 'react'
import { Link } from 'react-router-dom';
import styles from './ProjectTile.module.css'

const ProjectTile = ({cover, extension}) => {
    let pathConfiguration = `/projects${extension}`;
    let imagePath = `${process.env.PUBLIC_URL}/public-project-images/${cover}`;
    let imageClasses = `${styles.Image} mb-1`;
    let container = `${styles.LinkContainer}`
    return (
        <div className={container}>
            <Link to={pathConfiguration}>
                <img className={imageClasses} src={imagePath} alt="cover-pic.png"/>
            </Link>
        </div>
    )
}
export default React.memo(ProjectTile);