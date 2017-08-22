import React, {Component} from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './SimpleSlider1.css';

function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: 'block', background: 'red', zindex: 2, right: 0}}
            onClick={onClick}
        >1</div>
    );
}

function SamplePreArrow(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: 'block', background: 'green', zIndex: 2, left: 0}}
            onClick={onClick}
        >1</div>
    )
}


class SimpleSlider1 extends Component {


    handleClikOnBanner() {
        alert(1);
    }

    render() {
        let settings = {
            accessibility: true,
            adaptiveHeight: true,
            arrows: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePreArrow/>,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        };
        return (
            <Slider {...settings}>
                <div>
                    <div className="banner_item" onClick={this.handleClikOnBanner}>
                        <img src="https://yunlaiwu0.cn-bj.ufileos.com/编辑简历.png" alt="banner"/>
                    </div>
                </div>
                <div>
                    <div className="banner_item">
                        <img src="https://yunlaiwu0.cn-bj.ufileos.com/motie-PCbanner-2560_480.png" alt="banner"/>
                    </div>
                </div>
                <div>
                    <div className="banner_item">
                        <img src="https://yunlaiwu0.cn-bj.ufileos.com/newwriter-banner1.jpg" alt="banner"/>
                    </div>
                </div>
                <div>
                    <div className="banenr_item">
                        <img src="http://yunlaiwu0.cn-bj.ufileos.com/shandianzhenggao.jpg" alt="banner"/>
                    </div>
                </div>
                <div>
                    <div className="banner_item">
                        <img src="http://yunlaiwu0.cn-bj.ufileos.com/pc端banner-版保.jpg" alt="banner"/>
                    </div>
                </div>
                <div>
                    <div className="banner_item">
                        <img src="https://yunlaiwu0.cn-bj.ufileos.com/Banner-AppDownload.png" alt="banner"/>
                    </div>
                </div>
            </Slider>
        );
    }
}


export default SimpleSlider1;