import React from 'react';
import PhotoAddress from '../../../models/PhotoAddress';
import InfoHeader from './sub-components/InfoHeader';

const StockTraceProject = () => {
    const title = 'Stock Tracking Website';
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
    const description = 'Real time stock tracking website';
    return (
        <React.Fragment>
            <InfoHeader title={title} carouselItems={photoAddresses} stack={stack} description={description}/>
        </React.Fragment>
    )
}

export default React.memo(StockTraceProject)