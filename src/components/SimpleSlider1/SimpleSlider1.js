import React, { Component } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './SimpleSlider1.css';


function SampleNextArrow(props){
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={
                {
                ...style, 
                display: 'block', 
                background: 'red', 
                zindex:2, 
                right:0
                }
            }
            onClick={onClick}
        ></div>
    );
}

function SamplePreArrow(props){
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display:'block', background:'green', zIndex:2, left:0}}
            onClick={onClick}
        ></div>
    )
}



class SimpleSlider1 extends Component {
    render(){
        let settings = {
            accessibility: true,
            className: 'banner_item',
            adaptiveHeight: true,
            arrows: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePreArrow />,
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
                <img src="https://yunlaiwu0.cn-bj.ufileos.com/编辑简历.png" />
            </div>
            <div>
                <img src="https://yunlaiwu0.cn-bj.ufileos.com/motie-PCbanner-2560_480.png" />
            </div>
            <div>
                <img src="https://yunlaiwu0.cn-bj.ufileos.com/newwriter-banner1.jpg" />
            </div>
            <div>
                <img src="http://yunlaiwu0.cn-bj.ufileos.com/shandianzhenggao.jpg" />
            </div>
            <div>
                <img src="http://yunlaiwu0.cn-bj.ufileos.com/pc端banner-版保.jpg" />
            </div>
            <div>
                <img src="https://yunlaiwu0.cn-bj.ufileos.com/Banner-AppDownload.png" />
            </div>
        </Slider>
      );
    }
}


export default SimpleSlider1;