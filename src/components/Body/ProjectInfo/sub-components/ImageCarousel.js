import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ProjectInfo.module.css';
import DownloadIcon from '../../Download/DownloadIcon';

class ImageCarousel extends Component {

    state = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: window.screen.width > 768 ? true : false
    }

    configureSliderItems = () => {
        return this.props.images.map(image => <div key={image.address} className={styles.ItemContainer}>
                            <img className={styles.CarouselItem} alt="carousel-item" src={`${process.env.PUBLIC_URL}/public-project-images/${image.address}`} />
                            {image.additionalInfo ? <small className="text-danger">*{image.additionalInfo}</small> : null}
                        </div>
        
        )
    }

    toggleArrows = e => {
        if (e.matches) {
            e.stopPropagation();
            this.setState({arrows: false})
        } else {
            e.stopPropagation();
            this.setState({arrows: true})
        }
    }
    componentDidMount(){
        // media queries match with 'matches' property on event
        this.windowWidthCheck = window.matchMedia("(max-width: 768px)").addEventListener("change", this.toggleArrows, true);
    }

    componentWillUnmount(){
        if (this.windowWidthCheck) this.windowWidthCheck.removeEventListener("change", this.toggleArrows, true);

        // remove in state memory
        this.setState = (state, callback) => {
            return;
        };
    }
    render() {
        const headerStyle = `row ${styles.CarouselHeader}`;
        const iconStyles = `${styles.ResumeDownloadContainer} project-body`
        return (
            <React.Fragment>
                <div className={headerStyle}>
                    <h1 className="jumbotron-sub-display">Gallery</h1>
                </div>
                <div className={styles.SliderRow}>
                    <div className={styles.SliderContainer}>
                        <Slider {...this.state} className={styles.Carousel}>
                            {this.configureSliderItems()}
                        </Slider>
                    </div>
                </div>
            <div className={iconStyles}>
                <DownloadIcon path={this.props.zipFilePath} downloadName={this.props.zipFileName}>Download Full Gallery</DownloadIcon>
            </div>
            </React.Fragment>
        )
    }
}

export default ImageCarousel;