import React from 'react';
import Header from '../Header/Header';
import {ProjectPaths as paths} from '../../constants/ProjectPaths';
import ProjectTile from './ProjectTile/ProjectTile';

const Portfolio = () => {
    let projects = 
    [
        {
            id: 1,
            cover: 'github/cover-sm.PNG',
            extension: paths.GITHUB
        },
        {
            id: 2,
            cover: 'stock/stock-trace-home-sm.PNG',
            extension: paths.STOCK
        },
        {
            id: 3,
            cover: 'portfolio/cover-alt.PNG',
            extension: paths.PORTFOLIO
        },
        {
            id: 4,
            cover: 'first-proj/shooting-star-cover-sm.PNG',
            extension: paths.ANIMATIONS
        }
    ];
    return (
        <React.Fragment>
            <Header />
            <div className="portfolio-container">
                {projects.map(project => <ProjectTile key={project.id} 
                                                  cover={project.cover} 
                                                  extension={project.extension} />)}
            </div>
        </React.Fragment>
    )
}

export default Portfolio;