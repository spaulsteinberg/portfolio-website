import React from 'react'
import download_icon from '../../../assets/images/download-icon.png';
import styles from './DownloadIcon.module.css';
const DownloadIcon = (props) => {
    return (
        <a href={props.path} download={props.downloadName} className={styles.AnchorDownload}>
            <img className={styles.ResumeDownloadImage} src={download_icon} alt="Download Icon.png"/>
            <p>{props.children}</p>
        </a>
    )
}

export default React.memo(DownloadIcon);
