import React from 'react';
import PhotoAddress from '../../../models/PhotoAddress';
import InfoHeader from './sub-components/InfoHeader';

const StockTraceProject = () => {
    const title = "StockTrace"
    const subTitleText = "A lightweight tool to track growth and experiment in a risk-free environment.";
    const stack = ['Angular 9', 'TypeScript', 'JavaScript','JWT authentication', 'Angular Material', 'Node.js', 'Express.js',
            'MongoDB', 'IEX Cloud', 'Bootstrap 4', 'FullCalendar', 'D3.js', 'Python'];
    const photoAddresses = [
        new PhotoAddress(0, "stock/accounts-view.PNG"),
        new PhotoAddress(1, "stock/compare-dividends.PNG", "IEX Cloud API discontinued earnings endpoint :("),
        new PhotoAddress(2, "stock/stock-trace-onboarding.PNG"),
        new PhotoAddress(3, "stock/d3js-dash.PNG"),
        new PhotoAddress(4, "stock/ex-dividend-calendar.PNG"),
        new PhotoAddress(5, "stock/compare-charts.PNG"),
        new PhotoAddress(6, "stock/d3interactive2.PNG"),
        new PhotoAddress(7, "stock/customize-watchlist.PNG"),
        new PhotoAddress(8, "stock/latest-trending.PNG"),
        new PhotoAddress(9, "stock/mygains-portal.PNG"),
        new PhotoAddress(10, "stock/realtime-ticker.PNG"),
        new PhotoAddress(11, "stock/realtime-watchlist.PNG"),
        new PhotoAddress(12, "stock/stock-trace-home.PNG"),
    ];
    const backgroundTitleImage = "stock/compare-charts-crop.png";
    const description = `<p>
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
        </p>`
    return (
        <React.Fragment>
            <InfoHeader 
                title={title}
                subTitleText={subTitleText}
                carouselItems={photoAddresses} 
                stack={stack} 
                description={description}
                backgroundImg={backgroundTitleImage}/>
        </React.Fragment>
    )
}

export default React.memo(StockTraceProject)