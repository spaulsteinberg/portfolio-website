import React from 'react';
import Header from '../Header/Header';
import Project from './Project/Project';

const Portfolio = () => {
    let projects = 
    [
        {
            id: 1,
            title: 'GitHub-Infused Personal Site',
            description: 'Description here',
            stack: ['Angular 9', 'Typescript', 'GitHub API', 'Node.js', 'Express.js', 'Google Analytics', 'Google Analytics API',
                        'SQL', 'Twilio', 'Nodemailer', 'Bootstrap 4'],
            cover: '',
            photoAddresses: []
        },
        {
            id: 2,
            title: 'Stock Tracking Website',
            description: 'Real time stock tracking website',
            stack: ['Angular 9', 'TypeScript', 'JavaScript','JWT authentication', 'Angular Material', 'Node.js', 'Express.js',
                        'MongoDB', 'IEX Cloud', 'Bootstrap 4', 'FullCalendar', 'D3.js', 'Python'],
            cover: 'stock/stock-trace-home-sm.PNG',
            photoAddresses: []
        },
        {
            id: 3,
            title: 'Portfolio Website',
            description: 'This website :)',
            stack: ['React.js', 'JavaScript', 'Bootstrap 4'],
            cover: '',
            photoAddresses: []
        },
        {
            id: 4,
            title: 'CSS - SVG Animations',
            description: 'Animations made to learn css and svg',
            stack: ['HTML', 'CSS', 'SVG'],
            cover: 'first-proj/shooting-star-cover-sm.PNG',
            photoAddresses: []
        }
    ];
    return (
        <React.Fragment>
            <Header />
            <div className="row">
                {projects.map(project => <Project key={project.id} title={project.title} 
                                                  cover={project.cover} description={project.description}
                                                  stack={project.stack} photos={project.photoAddresses} />)}
            </div>
        </React.Fragment>
    )
}

export default Portfolio;