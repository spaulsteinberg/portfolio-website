import React from 'react';
import styles from './ProjectInfo.module.css';

const InfoHeader = ({title, subTitleText, backgroundImg, display}) => {
    return (
        <React.Fragment>
            <div className={styles.InfoHeader} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/public-project-images/${backgroundImg})`, color: display}}>
                <div className={styles.HeaderContainer}>
                    <h2 className="project-title m-1">{title}</h2>
                    <h4 className="jumbotron-sub-display m-1">{subTitleText}</h4>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(InfoHeader);