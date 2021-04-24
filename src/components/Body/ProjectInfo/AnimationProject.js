import React from 'react'
import InfoHeader from './sub-components/InfoHeader';

const AnimationProject = () => {
    const title = 'CSS - SVG Animations';
    return (
        <React.Fragment>
            <InfoHeader title={title} />
        </React.Fragment>
    )
}

export default React.memo(AnimationProject)