import React from 'react';
import Header from '../Header/Header';
import {ProjectPaths as paths} from '../../constants/ProjectPaths';
import Tiles from './Tiles';

const Portfolio = () => {
    let projects = 
    [
        {
            id: 5,
            cover: 'rest-admin/home.png',
            extension: paths.REST_ADMIN
        },
        {
            id: 2,
            cover: 'stock/stock-trace-home-sm1.PNG',
            extension: paths.STOCK
        },
        {
            id: 1,
            cover: 'github/cover-sm.PNG',
            extension: paths.GITHUB
        },
        {
            id: 3,
            cover: 'portfolio/cover-alt1.png',
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
            <Tiles projects={projects} />
        </React.Fragment>
    )
}

export default Portfolio;