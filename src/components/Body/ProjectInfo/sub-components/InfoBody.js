import React from 'react';
import styles from './ProjectInfo.module.css';

const InfoBody = ({description, stack}) => {
    const bodyContainerStyles = `row project-body ${styles.BodyText}`;
    const summaryStyles = `${styles.SummaryBorder} col-md-8 offset-md-1`;
    const stackListStyles = `${styles.TechStackBorder} ${styles.TechStackColumn}`
    return (
        <div className={bodyContainerStyles}>
            <div className={summaryStyles}>
                <h1 className="jumbotron-sub-display text-warning">Summary</h1>
                <div dangerouslySetInnerHTML={{__html: description}} style={{paddingBottom: '10px'}}></div>
            </div>
            <div className={stackListStyles}>
                <h1 className="jumbotron-sub-display text-warning">Tech Stack</h1>
                <div className={styles.TechStackList}>
                    <ul>
                        {stack.map(s => <li key={s}>{s}</li>)}
                    </ul>
                </div>
                <div className={styles.TechStackInline}>
                    {stack.map( (s, i) => <span key={`${s}`}>{i !== stack.length-1 ? `${s}, ` : s}</span>)}
                </div>
            </div>
        </div>
    )
}

export default React.memo(InfoBody);