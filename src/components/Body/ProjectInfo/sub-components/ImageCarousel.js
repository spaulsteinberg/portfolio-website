import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './ProjectInfo.module.css';

class ImageCarousel extends PureComponent {

    configureSliderItems = () => {
        return this.props.images.map(image => {
            return <div key={image.address} className={styles.ItemContainer}>
                        <img className={styles.CarouselItem} alt="carousel-item" src={`${window.location.origin}/public-project-images/${image.address}`} />
                        {image.additionalInfo ? <small className="text-danger">*{image.additionalInfo}</small> : null}
                   </div>
        }
        )
    }
    render() {
        const headerStyle = `row ${styles.CarouselHeader}`;
        const sliderOptions = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        return (
            <React.Fragment>
                <div className={headerStyle}>
                    <h1 className="display-4">Gallery</h1>
                </div>
                <div className="row">
                    <div className="col col-md-6 offset-md-3">
                        <Slider {...sliderOptions} className={styles.Carousel}>
                            {this.configureSliderItems()}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ImageCarousel;