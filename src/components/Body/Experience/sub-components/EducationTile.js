import React from 'react'
import styles from '../Experience.module.css';

const EducationTile = ({school}) => {
    const titleStyles = `${styles.EducationSchoolInfo} project-body`
    return (
        <React.Fragment>
            <div className={titleStyles}>
                <p>{school.name}</p>
                <p>{school.location}</p>
                <p>{school.datesAttended}</p>
            </div>
            <div className={styles.EducationSchoolAccomplishments}>
                <div><strong>Major</strong>: {school.major}</div>
                <div><strong>Minor</strong>: {school.minor}</div>
                <div><strong>GPA</strong>: {school.gpa}</div>
                <strong>Accomplishments:</strong>
                {
                school.accomplishments ?
                    <ul>
                        {school.accomplishments.map(accomplishment => <li key={accomplishment}>{accomplishment}</li>)}
                    </ul>
                    : null
                }
            </div>
        </React.Fragment>
    )
}

export default React.memo(EducationTile);
