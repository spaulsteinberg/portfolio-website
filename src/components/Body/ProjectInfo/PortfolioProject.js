import React from 'react';
import InfoBody from './sub-components/InfoBody';
import InfoHeader from './sub-components/InfoHeader';

const PortfolioProject = () => {
    React.useEffect(() => {
        window.scrollTo(0,0)
    })
    const title = 'Portfolio Website';
    const subTitleText = "A showcasing of my personal projects, work experience, education, and skills.";
    const stack = ['ReactJS', 'Next.js','JavaScript', 'JSX', 'Bootstrap 4', 'CSS3', 'HTML5'];
    const backgroundTitleImage = `${process.env.PUBLIC_URL}/public-project-images/portfolio/info-background-a.png`;
    const titleDisplayColor = "white";
    const description = `
        <p>
            The purpose of this project was not only to create a portfolio showcasing past personal projects, work experience,
            educational history and skills, but to reinforce React concepts through doing as opposed to watching more and more tutorial videos.
            Skills such as learning this new library, responsive web design, and creating fast single-page applications are all important and relevant skills to utilize and practice, and 
            more importantly offer the best user experience. The React Router is ideal for this, as links to pages can be set statically or dynamically
            with fast rendering.
        </p>
        <p>
            Vercel, the creators of Next.js, was/is being used to deploy and host this website. Vercel is ideal for hosting React 
            and Next.js applications, along with serverless functions. They also offer easy CI/CD with seamless GitHub repository integration.
            In addition, adding environmental variables is easy and does not require any configuration files.
            The Contact modal's submitted requests are routed to my serverless Next.js project function that is its handler. Due to
            the nature of serverless functions, each request requires a new database connection as opposed to having a persistent connection,
            a byproduct of which is slightly longer processing time. Logs and requests can be monitored on the Vercel dashboard.
        </p>
        <p>
            Styling and responsiveness was completed in CSS3 and Bootstrap was used occassionally to save time and code. The layout
            of the website will change depending on screen size, and breakpoints are supported for mobile portrait/landscape, 
            tablet, laptop, and larger screens. The CSS layout being used is Flexbox, which now has Chrome Dev Tools support and is 
            my favorite CSS web layout model, since it allows responsive elements and is easy to override with media queries as needed.
        </p>
    `;
    return (
        <React.Fragment>
            <InfoHeader title={title} subTitleText={subTitleText} backgroundImg={backgroundTitleImage} display={titleDisplayColor}/>
            <InfoBody description={description} stack={stack} />
        </React.Fragment>
    )
}

export default React.memo(PortfolioProject)