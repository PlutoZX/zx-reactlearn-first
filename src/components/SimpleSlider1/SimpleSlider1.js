import React, {Component} from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './SimpleSlider1.css';

// 这里用了无state组件的函数式声明方法 这里的类名里还是接收了react-slick传入的类名，有些样式及翻页函数还是它的
function SampleNextArrow(props) {
    const {className, style, onClick, show} = props;
    return (
        <div
            className={className + ' bannerArrow' + ' bannerArrow_right' + (show?' bannerArrow_show':'')}
            onClick={onClick}
        ></div>
    );
}
function SamplePreArrow(props) {
    const {className, style, onClick, show} = props;
    return (
        <div
            className={className + ' bannerArrow' + ' bannerArrow_left' + (show?' bannerArrow_show':'')}
            onClick={onClick}
        ></div>
    )
}

class SimpleSlider1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHoverShowArrow: false
        };

        this.handleHoverShowArrow = this.handleHoverShowArrow.bind(this);
        this.handleLeaveHideArrow = this.handleLeaveHideArrow.bind(this);
    }

    handleHoverShowArrow(){
        this.setState({
            isHoverShowArrow: true
        })
    }
    handleLeaveHideArrow(){
        this.setState({
            isHoverShowArrow: false
        })
    }

    render() {
        let settings = {
            accessibility: true,
            adaptiveHeight: false,
            arrows: true,
            nextArrow: <SampleNextArrow show={this.state.isHoverShowArrow}/>,
            prevArrow: <SamplePreArrow show={this.state.isHoverShowArrow}/>,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 3000,
        };
        return (
            <div className="bannerSliderBox" onMouseEnter={this.handleHoverShowArrow} onMouseLeave={this.handleLeaveHideArrow}>
                <Slider {...settings}>
                    <div>
                        <div className="banner_item">
                            <a href="javascript:;" className="banner_item1"></a>
                        </div>
                    </div>
                    <div>
                        <div className="banner_item">
                            <a href="javascript:;" className="banner_item2"></a>
                        </div>
                    </div>
                    <div>
                        <div className="banner_item">
                            <a href="javascript:;" className="banner_item3"></a>
                        </div>
                    </div>
                    <div>
                        <div className="banner_item">
                            <a href="javascript:;" className="banner_item4"></a>
                        </div>
                    </div>
                    <div>
                        <div className="banner_item">
                            <a href="javascript:;" className="banner_item5"></a>
                        </div>
                    </div>
                    <div>
                        <div className="banner_item">
                            <a href="javascript:;" className="banner_item6"></a>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}


export default SimpleSlider1;
