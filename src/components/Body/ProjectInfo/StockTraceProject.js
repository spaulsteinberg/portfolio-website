import React from 'react';
import PhotoAddress from '../../../models/PhotoAddress';
import InfoHeader from './sub-components/InfoHeader';
import InfoBody from './sub-components/InfoBody';
import ImageCarousel from './sub-components/ImageCarousel';
import useTop from '../../../hooks/useTop';

const StockTraceProject = () => {
    useTop();
    const title = "StockTrace"
    const subTitleText = "A lightweight tool to track growth and experiment in a risk-free environment.";
    const stack = ['Angular 9', 'TypeScript', 'JavaScript', 'Python', 'Node.js', 'Express.js', 'RxJS 6', 'D3.js','JWT authentication', 'Angular Material',
            'MongoDB', 'IEX Cloud Console', 'Bootstrap 4', 'FullCalendar', 'Chart.js'];
    const photoAddresses = [
        new PhotoAddress(12, "stock/stock-trace-home16-91.png"),
        new PhotoAddress(2, "stock/stock-trace-onboarding16-91.png"),
        new PhotoAddress(3, "stock/d3js-dash16-91.png"),
        new PhotoAddress(0, "stock/accounts-view16-91.png"),
        new PhotoAddress(4, "stock/ex-dividend-calendar16-91.png"),
        new PhotoAddress(5, "stock/compare-charts16-91.png"),
        new PhotoAddress(8, "stock/latest-trending16-91.png"),
        new PhotoAddress(9, "stock/mygains-portal16-9.png"),
        new PhotoAddress(10, "stock/realtime-ticker16-9.png"),
        new PhotoAddress(11, "stock/realtime-watchlist16-91.png"),
    ];
    const backgroundTitleImage = `${process.env.PUBLIC_URL}/public-project-images/stock/compare-charts-crop-alt1.png`;
    const titleDisplayColor = "white";
    const description = `
        <p>
            StockTrace was imagined when I was consistently going back and forth between real-time quote sources,
            my portfolio, and finally my calculator to determine whether a stock was worth purchasing (not to mention how much of it).
            Multiply this by each stock you are thinking of buying, and you are in for a lot of time spent just searching.
            Not to mention convoluted visuals and boatloads of information the average investor simply does not care about.
        </p>
        <p>
            I decided to come up with a solution. A project that offers real-time ticker quotes, easy chart visualizations,
            a watchlist, a risk-free sandbox to get an accurate picture of what you can assume you will buy in at to determine
            the price you should sell, and a mock portfolio to track your real positions with ease.
        </p>
        <p>
            Users can simply register through the Register portal and have instant access to their own curated watchlist,
            where they can track dividends, earnings, view charts, compare stocks, and view realtime prices. In addition, users
            have access to a calendar of announced ex-dividend dates for their watchlist items, and also a feed containing
            the latest two articles about each company thats in their watchlist.
        </p>
        <p>
            Users can also simply create a MyGains profile to mirror their real-life ones, so that they can benefit
            from risk-free experimentation in the Accounts portal. Each user can add any accounts they have with any
            brokerage and thus eliminating the time it takes to toggle between them (for ex if a user has both a Schwab and
            Robinhood account). They can then add and remove positions and accounts as necessary. Access to cultivated charts 
            are only a click away, where users can see their largest accounts, postitions, and see a cumulation of their combined accounts.
            There is also a realtime chart retrieving the latest quotes every 5 seconds for experimentation purposes and finding the best time to buy and maximize profit.
        </p>`;
    const downloadFileName = "Stock_Trace_Gallery_SPS";
    const downloadFilePath = `${process.env.PUBLIC_URL}/public-project-images/stock/stock_visual_images.zip`
    return (
        <React.Fragment>
            <InfoHeader title={title} subTitleText={subTitleText} backgroundImg={backgroundTitleImage} display={titleDisplayColor}/>
            <InfoBody description={description} stack={stack} />
            <ImageCarousel images={photoAddresses} zipFileName={downloadFileName} zipFilePath={downloadFilePath}/>
        </React.Fragment>
    )
}

export default React.memo(StockTraceProject);