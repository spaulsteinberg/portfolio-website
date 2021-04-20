import React from 'react';
import Header from '../Header/Header';
import Project from './ProjectTile/ProjectTile';
import {ProjectPaths as paths} from '../../constants/ProjectPaths';

const Portfolio = () => {
    let projects = 
    [
        {
            id: 1,
            title: 'GitHub-Infused Personal Site',
            description: 'Description here',
            stack: ['Angular 9', 'Typescript', 'GitHub API', 'Node.js', 'Express.js', 'Google Analytics', 'Google Analytics API',
                        'SQL', 'Twilio', 'Nodemailer', 'Bootstrap 4'],
            cover: 'github/cover-sm.PNG',
            photoAddresses: [],
            extension: paths.GITHUB
        },
        {
            id: 2,
            title: 'Stock Tracking Website',
            description: 'Real time stock tracking website',
            stack: ['Angular 9', 'TypeScript', 'JavaScript','JWT authentication', 'Angular Material', 'Node.js', 'Express.js',
                        'MongoDB', 'IEX Cloud', 'Bootstrap 4', 'FullCalendar', 'D3.js', 'Python'],
            cover: 'stock/stock-trace-home-sm.PNG',
            photoAddresses: [],
            extension: paths.STOCK
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'This website :)',
            stack: ['React.js', 'JavaScript', 'Bootstrap 4'],
            cover: 'portfolio/cover-alt.PNG',
            photoAddresses: [],
            extension: paths.PORTFOLIO
        },
        {
            id: 4,
            title: 'CSS - SVG Animations',
            description: 'Animations made to learn css and svg',
            stack: ['HTML', 'CSS', 'SVG'],
            cover: 'first-proj/shooting-star-cover-sm.PNG',
            photoAddresses: [],
            extension: paths.ANIMATIONS
        }
    ];
    return (
        <React.Fragment>
            <Header />
            <div className="row">
                {projects.map(project => <Project key={project.id} 
                                                  cover={project.cover} 
                                                  extension={project.extension} />)}
            </div>
        </React.Fragment>
    )
}

export default Portfolio;