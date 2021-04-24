import React from 'react';
import InfoHeader from './sub-components/InfoHeader';

const PortfolioProject = () => {
    const title = 'Portfolio Website';
    return (
        <React.Fragment>
            <InfoHeader title={title} />
        </React.Fragment>
    )
}

export default React.memo(PortfolioProject)