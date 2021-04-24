import React from 'react';
import InfoHeader from './sub-components/InfoHeader';

const GithubProject = () => {
    const title = 'GitHub-Infused Personal Site'
    return (
        <React.Fragment>
            <InfoHeader title={title} />
        </React.Fragment>
    )
}

export default React.memo(GithubProject)