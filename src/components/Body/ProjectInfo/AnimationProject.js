import React from 'react'
import InfoBody from './sub-components/InfoBody';
import InfoHeader from './sub-components/InfoHeader';
import PhotoAddress from '../../../models/PhotoAddress';
import ImageCarousel from './sub-components/ImageCarousel';
import useTop from '../../../hooks/useTop';

const AnimationProject = () => {
    useTop();
    const title = 'CSS - SVG Animations';
    const subTitleText = "Pure CSS/HTML Animations Powered by SVG3";
    const backgroundTitleImage = `${process.env.PUBLIC_URL}/public-project-images/first-proj/cover-alt.PNG`;
    const display = "white";
    const stack = ['HTML', 'CSS', 'SVG3'];
    const photoAddresses = [
        new PhotoAddress(0, 'first-proj/galaxy.gif'),
        new PhotoAddress(1, 'first-proj/rectangle-maze-2.gif'),
        new PhotoAddress(2, 'first-proj/star-sun-moon.gif')
    ];
    const description = `
            <p>
                Creating relatively complex and creative animations using HTML, CSS, and SVG3 is a
                great learning experience. You get the chance to see how the DOM is structured, the do's and dont's
                of HTML and CSS, and an intro into SVG's, which can pay off when dealing with libraries like D3.js
                for which the visuals are based upon.
            </p>
            <p>
                There are three finished projects here, all done in 2018. They are great for background screens
                and for viewing. I hope to be able to pick these back up in my spare time and add to it here, in addition
                to finishing up ones that are only partially complete.
                Note that the quality is not as sharp as it should be, since free gif libraries tend to not yield the 
                finest quality &#128578;.
            </p>`;
    const downloadFileName = "Animation_Gallery_SPS";
    const downloadFilePath = `${process.env.PUBLIC_URL}/public-project-images/first-proj/animation_export.zip`
    return (
        <React.Fragment>
            <InfoHeader title={title} subTitleText={subTitleText} backgroundImg={backgroundTitleImage} display={display} />
            <InfoBody description={description} stack={stack} />
            <ImageCarousel images={photoAddresses} zipFileName={downloadFileName} zipFilePath={downloadFilePath}/>
        </React.Fragment>
    )
}

export default React.memo(AnimationProject)