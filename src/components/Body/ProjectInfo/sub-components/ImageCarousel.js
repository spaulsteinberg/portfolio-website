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
        return (
            <div className="row">
                <div className="col col-md-6 offset-md-3">
                    <Slider {...this.props.settings} className={styles.Carousel}>
                        {this.configureSliderItems()}
                    </Slider>
                </div>
            </div>
        )
    }
}

export default ImageCarousel;