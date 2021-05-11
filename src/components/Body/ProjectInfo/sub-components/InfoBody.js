import React from 'react';
import styles from './ProjectInfo.module.css';

const InfoBody = ({description, stack}) => {
    const bodyContainerStyles = `row project-body ${styles.BodyText}`
    return (
        <div className={bodyContainerStyles}>
            
            <div className="col-md-8 offset-md-1">
                <h1 className="jumbotron-sub-display text-success">Summary</h1>
                <div dangerouslySetInnerHTML={{__html: description}}></div>
            </div>
            <div className="col-3">
                <h1 className="jumbotron-sub-display text-success">Tech Stack</h1>
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