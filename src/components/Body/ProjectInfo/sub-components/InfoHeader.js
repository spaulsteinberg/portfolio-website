import React from 'react';
import styles from './ProjectInfo.module.css';

const InfoHeader = ({title, subTitleText, backgroundImg, display}) => {
    return (
        <React.Fragment>
            <div className={styles.TitleContainer} style={{color: display}}>
                <div className={styles.TextDiv}>
                    <h2 className="project-title">{title}</h2>
                    <h4 className="jumbotron-sub-display">{subTitleText}</h4>
                </div>
                <img className={styles.TitleImage} src={backgroundImg} alt="bg_png.png"/>
            </div>
        </React.Fragment>
    )
}

export default React.memo(InfoHeader);