import React from 'react';
import styles from '../Experience.module.css';
const ExperienceTile = ({job}) => {
    return (
        <React.Fragment>
            <div className={styles.LogoColumn}>
            {job.mobileLogo ? 
                    <picture>
                        <source media="(max-width: 769px)" srcSet={job.mobileLogo} />
                        <img className={styles.Logo} src={job.logo} alt={job.alt} />
                    </picture>
                    : <img className={styles.Logo} src={job.logo} alt={job.alt} />
                }
                {/* <img className={styles.Logo} src={job.logo} alt={job.alt} /> */}
            </div>
            <div className={styles.OffsetDescription}></div>
            <div className={styles.DescriptionColumn}>
                <div className={styles.DescriptionTitles}>
                    <span className={styles.RoleFlex}>{job.role}</span>
                    <span className={styles.DateFlex}>{job.timeframe}</span>
                    <span className={styles.TeamFlex}>{job.team}</span>
                </div>
                <div>
                    <ul>
                        { job.descriptionEntries ? job.descriptionEntries.map(entry => <li key={entry}>{entry}</li>) : null }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default React.memo(ExperienceTile);
