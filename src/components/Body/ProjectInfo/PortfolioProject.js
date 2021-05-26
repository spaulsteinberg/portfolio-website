import React from 'react';
import InfoBody from './sub-components/InfoBody';
import InfoHeader from './sub-components/InfoHeader';

const PortfolioProject = () => {
    React.useEffect(() => {
        window.scrollTo(0,0)
    })
    const title = 'Portfolio Website';
    const subTitleText = "A showcasing of my personal projects, work experience, education, and skills.";
    const stack = ['ReactJS', 'JavaScript', 'JSX','CSS3', 'HTML5'];
    const backgroundTitleImage = `${process.env.PUBLIC_URL}/public-project-images/portfolio/info-background-a.png`;
    const titleDisplayColor = "white";
    const description = `
        <p>
            Since your currently viewing this project, this section will be more of a retrospective than anything else. There are no images
            necessary, and the reasoning for creating this website and portfolio as a learning experience rather than using a pre-made
            template are explained below.
        </p>
        <p>
            Creating my own portfolio from scratch has been something I've been wanting to do for a while, but hadn't found the time.
            Between applying for jobs out of school, learning Angular and .NET for my job, and getting acclimated to 
            a new phase of life, job, and city, it just didnt fit in my priorities.
        </p>
        <p>
            Now that I'm past that, I was finally able to both create my portfolio and learn some of the fundamentals of ReactJS (React) and responsive web design.
            React is the most in-demand library as of 2021, as well as the most dynamic library or framework I've used.
        </p>
        <p>
            This is a responsive website that was designed mobile-first using CSS Flexbox. It uses the React Router 5.2 for seamless transitions
            between pages, with responsive images, text, and sections depending on the device width (and sometimes height). Code and time 
            were saved due to the heavy re-usability of React components, which allowed me to focus much more on design aspects of the portfolio
            and learning the pillars of responsive design.
        </p>
        <p>
            Additionally, while JSX was confusing at first it is very reliable and makes understanding 
            where everything is in the DOM much simpler. React also has its own Dev Tools kit, where one can find the state of the component,
            any props it has, children, etc.
        </p>
        <p>
            Feel free to contact me with any feedback on the site by clicking 'Contact' in the navigation bar, 
            or by direct Gmail, Linkedin message, or for code/stylistic criticisms by opening an issue on GitHub. You can find these 
            links on either the top or bottom navigation bars.
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