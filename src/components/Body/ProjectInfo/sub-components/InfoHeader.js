import React, {PureComponent} from 'react';
import classes from './InfoHeader.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class InfoHeader extends PureComponent {
    state = {
        slider: {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    };
//style={{backgroundImage: `url(${process.env.PUBLIC_URL}/public-project-images/${cover})`}}
    configureSliderItems = () => {
        return this.props.carouselItems.map(photo => {
            return <div key={photo.address} className={classes.ItemContainer}>
                        <img className={classes.CarouselItem} alt="carousel-item" src={`${window.location.origin}/public-project-images/${photo.address}`} />
                        {photo.additionalInfo ? <small className="text-danger">*{photo.additionalInfo}</small> : null}
                   </div>
        }
        )
    }


    render(){
        return (
            <React.Fragment>
                <div className={classes.InfoHeader}>
                    <div className="text-center my-3 mx-3">
                        <h2 className="display-4">{this.props.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-md-6 offset-md-3">
                        <Slider {...this.state.slider} className={classes.Carousel}>
                            {this.configureSliderItems()}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default InfoHeader;