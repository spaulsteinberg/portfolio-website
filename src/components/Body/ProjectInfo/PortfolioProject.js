import React from 'react';
import InfoHeader from './sub-components/InfoHeader';

const PortfolioProject = () => {
    const title = 'Portfolio Website';
    /* const photoAddresses = [];
    const description = 'This website :)';
    const stack = ['React.js', 'JavaScript', 'JSX', 'Bootstrap 4']; */
    return (
        <React.Fragment>
            <InfoHeader title={title} />
        </React.Fragment>
    )
}

export default React.memo(PortfolioProject)