import React, { Component } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './SimpleSlider1.css';

class SimpleSlider1 extends Component {
    render(){
      let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
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