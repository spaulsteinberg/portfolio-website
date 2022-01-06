import React from 'react'
import ProjectTile from './ProjectTile/ProjectTile'
import PropTypes from 'prop-types'

const Tiles = ({projects}) => {
    return (
        <div className="portfolio-container">
            {projects.map(project => <ProjectTile key={project.id}
                cover={project.cover}
                extension={project.extension} />)}
        </div>
    )
}

Tiles.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Tiles
