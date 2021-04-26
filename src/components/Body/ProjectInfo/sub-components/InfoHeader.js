import React, {PureComponent} from 'react';
import ImageCarousel from './ImageCarousel';
import styles from './ProjectInfo.module.css';

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

    render(){
        return (
            <React.Fragment>
                <div className={styles.InfoHeader} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/public-project-images/${this.props.backgroundImg})`}}>
                    <div className={styles.HeaderContainer}>
                        <h2 className="display-2">{this.props.title}</h2>
                        <h4 className="display-4">{this.props.subTitleText}</h4>
                    </div>
                </div>
                <div className="row text-white">
                    <div className="col col-md-8 offset-md-2">
                        {this.props.description}
                        <p>StockTrace was imagined when I was consistently </p>
                    </div>
                </div>
                <ImageCarousel settings={this.state.slider} images={this.props.carouselItems} />
            </React.Fragment>
        )
    }
}

export default InfoHeader;