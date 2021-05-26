import React from 'react';
import InfoBody from './sub-components/InfoBody';
import InfoHeader from './sub-components/InfoHeader';
import ImageCarousel from './sub-components/ImageCarousel';
import PhotoAddress from '../../../models/PhotoAddress';

const GithubProject = () => {
    React.useEffect(() => {
        window.scrollTo(0,0)
    })
    const title = 'GitHub-Infused Personal Site';
    const subTitleText = "A website that mixes GitHub code, Google Analytics, and a portfolio all in one.";
    const backgroundImage = "github/sm-alt.png";
    const titleDisplayColor = "white";
    const stack = ['Angular 9', 'Typescript', 'GitHub API', 'Node.js', 'Express.js', 'RxJS 6', 'Google Analytics',
                'SQL', 'Twilio', 'Nodemailer', 'Bootstrap 4', 'Chart.js'];
    const description = `
                <p>
                    Infusing GitHub directly into a portfolio can add depth and credibility to your resume
                    and what one had accomplished. Since it is a pillar of open-source and is so widely used,
                    it makes it simple to have an interface into your code and have any who are interested track progress,
                    commit frequency, code frequency, etc.
                </p>
                <p>
                    This project was mainly for fun and to grasp a better understanding of Angular, so it was worthwhile
                    to add ample and easy to read visuals, cards, and analytic data. In addition, users can send feedback
                    to me through the website that delivers via both email and text. Language frequency, commit charts, and
                    commit frequency graphs for each repository and account as a whole enhance a visitors understanding
                    of what type of applications and code thats being written.
                </p>
                <p>
                    Analytical data obtained through Google Analytics robust API is used to track the most viewed pages and the
                    time spent on those pages so that future releases of the website could be able to curate to those preferences,
                    and also work on lesser viewed pages.
                </p>`;
    const photoAddresses = [
        new PhotoAddress(4, "github/cover16-9.PNG"),
        new PhotoAddress(3, "github/commits-chart16-9.PNG"),
        new PhotoAddress(5, "github/contact-page16-9.PNG"),
        new PhotoAddress(6, "github/language-chart16-9.PNG"),
        new PhotoAddress(7, "github/navigation-screen16-9.PNG"),
        new PhotoAddress(8, "github/visitors-chart16-9.PNG"),
        new PhotoAddress(9, "github/background-page16-19.png")
    ];
    const downloadFileName = "Github_Port_Gallery_SPS";
    const downloadFilePath = `${process.env.PUBLIC_URL}/public-project-images/github/Github_Portfolio_Project_Export.zip`
    return (
        <React.Fragment>
            <InfoHeader title={title} subTitleText={subTitleText} backgroundImg={backgroundImage} display={titleDisplayColor}/>
            <InfoBody description={description} stack={stack} />
            <ImageCarousel images={photoAddresses} zipFileName={downloadFileName} zipFilePath={downloadFilePath}/>
        </React.Fragment>
    )
}

export default React.memo(GithubProject)