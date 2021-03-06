import React from 'react'
import styles from './Experience.module.css'
import schwab_logo from '../../../assets/logos/Charles_Schwab_Corporation-Logo-long.png';
import schwab_logo_mobile from '../../../assets/logos/Charles_Schwab_Corporation-Logo-short.png';
import att_logo from '../../../assets/logos/AT&T-Logo-sm.png';
import lev_logo from '../../../assets/logos/Lev-Logo16-c-4.png';
import ibm_logo from '../../../assets/logos/IBM-Logo.png'
import ExperienceTile from './sub-components/ExperienceTile';
import EducationTile from './sub-components/EducationTile';
import SkillTile from './sub-components/SkillTile';
import DownloadIcon from '../Download/DownloadIcon';
const experience = () => {
    const resumePath = `${process.env.PUBLIC_URL}/pdfs/ResumeSamuelSteinberg.pdf`;
    const roles = [
        {
            role: "Full Stack Engineer",
            timeframe: "10/2021 - Present",
            team: "Early Programs Team",
            descriptionEntries: [
                "Developing next generation Early Programs Admin Tool to enable clients to push their products quicker and gain more exposure",
            ],
            logo: ibm_logo,
            alt: "IBM Logo"
        },
        {
            role: "Software Engineer - Full Stack",
            timeframe: "6/2020 - 10/2021",
            team: "Status Team",
            descriptionEntries: [
                "Developed and delivered notification services to advisors using RabbitMQ and live MongoDB Changestreams",
                "Contributed to developing a notification API to allow the notifications service to be consumed by other Schwab teams and third-party users.",
                "Developed and delivered dashboard applications (UI and API) to save advisors time with a custom dashboard for status and alert requests.",
                "Contributed to the ability to offer status to advisor firms and for Transfer of Asset requests, leading to a significant increase of Status page adoption.",
                "Improved quality of codebase with unit testing, reaching organizational standards on code coverage on all applications.",
            ],
            logo: schwab_logo,
            mobileLogo: schwab_logo_mobile,
            alt: "Charles Schwab Logo"
        },
        {
            role: "NCI Intern",
            timeframe: "6/2019 - 8/2019",
            team: "NCI Operations Dept.",
            logo: att_logo,
            alt: "AT&T Logo",
            descriptionEntries: [
                "Wrote a scalable automation application supporting service request teams, bringing the time to submit service tickets down from 45+ minutes to a few seconds.",
                "Created and maintained an application to support internal databases by ensuring and enhancing data integrity and prevent reliance on tainted data.",
                "Implemented application user interfaces for easy use by internal teams.",
                "Interfaced with users directly; implemented feedback, and trained other employees on how to use the applications."
            ]
        },
        {
            role: "Quality Assurance Intern",
            timeframe: "4/2018 - 8/2018",
            logo: lev_logo,
            alt: "Lev Interactive Logo",
            descriptionEntries: [
                "Ensured quality and reliability of web-based applications",
                "Responsible for testing and debugging applications in staging environment prior to deployment"
            ]
        }
    ];
    const schools = [
        {
            name: "University of Tennessee",
            location: "Knoxville, TN",
            datesAttended: "8/2016 - 5/2020",
            major: "Computer Science",
            minor: "Cybersecurity",
            gpa: 3.69,
            accomplishments: [
                "Deans List Summa Cum Laude x2",
                "Deans List Magna Cum Laude x2",
                "Deans List Cum Laude x1"
            ]
        }
    ];
    const languages = {
        title: "Programming Languages",
        content: ["TypeScript", "JavaScript", "JSX", "Python", "C#", "C++", "C", "HTML5", "CSS3", "PHP", "Java"]
    };
    const frameworksAndLibraries = {
        title: "Frameworks and Libraries",
        content: ['Angular', 'ReactJS', 'JQuery', 'Node.js', 'Express.js', '.NET Core', 'Selenium Webdriver']
    };
    const hybrids = {
        title: "Database Languages and Utilities",
        content: ['SQL', 'MongoDB', 'RabbitMQ']
    };
    const computerApps = {
        title: "Computer Programs and Apps",
        content: [
            'VS Code', 'Visual Studio', 'Git', 'SVN', 'PyCharm', 'IntellIJ', 'PyQt Designer', 'Studio 3T', 'RabbitMQ Admin',
            'Linux', 'Microsoft Office'
        ]
    };
    const certifications = {
        title: "Certifications",
        content: ["MTA: Software Development Fundamentals", "Professional Scrum Developer I"]
    }
    const skillsAndCerts = [languages, frameworksAndLibraries, hybrids, computerApps, certifications]
    return (
        <div className="project-body">
            <div className={styles.HeadingContainer}>
                <h1 className="jumbotron-display text-warning">Roles</h1>
                {roles.map(role => <div key={role.role} className={styles.LogoRow}><ExperienceTile job={role}/></div>)}
            </div>
            <div className={styles.HeadingContainer}>
                <h1 className="jumbotron-display text-warning">Education</h1>
                {schools.map(school => <EducationTile key={school.name} school={school}/>)}
            </div>
            <div className={styles.HeadingContainer}>
                <h1 className="jumbotron-display text-warning">Skills & Certifications</h1>
                {skillsAndCerts.map(skc => <SkillTile key={skc.title} item={skc} />)}
            </div>
            <div className={styles.ResumeDownloadContainer}>
                <DownloadIcon path={resumePath} downloadName="samuel_steinberg_resume">Download Resume</DownloadIcon>
            </div>
        </div>
    )
}

export default React.memo(experience);