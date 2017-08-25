import React, { Component } from 'react';
import Slider from 'react-slick';
import './slick.css';
import './slick-theme.css';
import './Yunlaiwu.css';



// 标题
function YunlaiwuTitle(props){
    if(!props.text){
        return null;
    }
    return <h2 className="yunlaiwu_title" >{props.text}</h2>;
}
// 介绍
function YunlaiwuIntro(props){
    if(!props.text){
        return null;
    }
    return <p className="yunlaiwu_intro">{props.text}</p>
}
// 板块
class YunlaiwuPlate extends Component {
    constructor(props){
        super(props);
        this.state = {

        };

        this.handleHoverChange = this.handleHoverChange.bind(this);
    }

    handleHoverChange(e){
        this.props.onPlateChange(e.target.getAttribute("data-index"));
    }

    render(){
        const platehover = parseInt(this.props.platehover); // 注意标签属性的数据类型
        return(
            <div className="candu_item_box">
                {
                    this.props.plate.map((value, index) => {
                        if(index === 0 ){
                            return <span
                                className={'candu_item' + (platehover === index ? ' selected' : '')}
                                key={index}
                                onMouseEnter={this.handleHoverChange}
                                data-index={index} >{value}</span>
                        }else {
                            return <span key={index}> / <span
                                        className={'candu_item' + (platehover === index ? ' selected' : '')}
                                        onMouseEnter={this.handleHoverChange}
                                        data-index={index} >{value}
                                        </span>
                                    </span>
                        }
                    })
                }
            </div>
        )
    }
}
// 板块小字
class YunlaiwuPlatemin extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const platemin = this.props.platemin;
        const platehover = parseInt(this.props.platehover);
        return (
            <div>
                {
                    platemin.map((value, index) => {
                        if(index === 0){
                            return <p className={'candu_itemmin' + (platehover === index ? ' selected' : '')} key={index}>{value}</p>
                        }
                        return <p className={'candu_itemmin' + (platehover === index ? ' selected' : '')} key={index}>{value}</p>
                    })
                }
            </div>
        )
    }
}
// 图片
class YunlaiwuImg extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        const imgs = this.props.imgs;
        const clsName = this.props.clsName;
        const platehover = parseInt(this.props.platehover);
        return(
            <div className={clsName + "_box"}>
                {
                    imgs.map((value, index) => {
                        if(index === 0){
                            return <img src={value}  className={clsName + (platehover === index ? ' selected' : '')} alt="" key={index}/>
                        }
                        return <img src={value}  className={clsName + (platehover === index ? ' selected' : '')} alt="" key={index}/>
                    })
                }
            </div>
        )
    }
}
// 成交案例轮播
function SliderArrow(props){
    return (
        <div
            className={props.className + ' dealArrow' + (props.direct === 'left' ? ' dealArrow_left' : ' dealArrow_right') + (props.show ? ' dealArrow_show' : '')}
            onClick={props.onClick}
        >
        </div>
    )
}
class YunlaiwuSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHoverShowArrow: false
        };

        this.handleHoverShowArrow  = this.handleHoverShowArrow.bind(this);
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


    render(){
        let settings = {
            accessibility: true,
            adaptiveHeight: true, // 默认是true，这里不要改成false，要不然不能自己匹配间距，不用主动调整间距，只需设定总长及每个轮播长度，间距自动计算
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            nextArrow: <SliderArrow direct="right" show={this.state.isHoverShowArrow}/>,
            prevArrow: <SliderArrow direct="left" show={this.state.isHoverShowArrow}/>
        };
        return (
            <div className="dealitem_box" onMouseEnter={this.handleHoverShowArrow} onMouseLeave={this.handleLeaveHideArrow}>
                <Slider {...settings}>
                    <div>
                        <a href="javascript:;" className="dealitem" style={{backgroundImage: 'url(https://yunlaiwu0.cn-bj.ufileos.com/chengjiao-lantingxumima.png)'}}>
                            <div>唐隐《大唐悬疑录：兰亭序密码》</div>
                            <div className="deal_cover"></div>
                            <div>类型：悬疑、古装</div>
                        </a>
                    </div>
                    <div>
                        <a href="javascript:;" className="dealitem" style={{backgroundImage: 'url(https://yunlaiwu0.cn-bj.ufileos.com/chengjiao-lantingxumima.png)'}}>
                            <div>唐隐《大唐悬疑录：兰亭序密码》</div>
                            <div className="deal_cover"></div>
                            <div>类型：悬疑、古装</div>
                        </a>
                    </div>
                    <div>
                        <a href="javascript:;" className="dealitem" style={{backgroundImage: 'url(https://yunlaiwu0.cn-bj.ufileos.com/chengjiao-lantingxumima.png)'}}>
                            <div>唐隐《大唐悬疑录：兰亭序密码》</div>
                            <div className="deal_cover"></div>
                            <div>类型：悬疑、古装</div>
                        </a>
                    </div>
                    <div>
                        <a href="javascript:;" className="dealitem" style={{backgroundImage: 'url(https://yunlaiwu0.cn-bj.ufileos.com/chengjiao-lantingxumima.png)'}}>
                            <div>唐隐《大唐悬疑录：兰亭序密码》</div>
                            <div className="deal_cover"></div>
                            <div>类型：悬疑、古装</div>
                        </a>
                    </div>
                    <div>
                        <a href="javascript:;" className="dealitem" style={{backgroundImage: 'url(https://yunlaiwu0.cn-bj.ufileos.com/chengjiao-lantingxumima.png)'}}>
                            <div>唐隐《大唐悬疑录：兰亭序密码》</div>
                            <div className="deal_cover"></div>
                            <div>类型：悬疑、古装</div>
                        </a>
                    </div>
                    <div>
                        <a href="javascript:;" className="dealitem" style={{backgroundImage: 'url(https://yunlaiwu0.cn-bj.ufileos.com/chengjiao-lantingxumima.png)'}}>
                            <div>唐隐《大唐悬疑录：兰亭序密码》</div>
                            <div className="deal_cover"></div>
                            <div>类型：悬疑、古装</div>
                        </a>
                    </div>
                </Slider>
            </div>
        )
    }
}

class Yunlaiwu extends Component {
    constructor(props){
        super(props);
        this.state = {
            isPlateHover: 0
        };
        this.handlePlateChange = this.handlePlateChange.bind(this);
    }

    handlePlateChange(index){
        this.setState({
            isPlateHover: index
        });
    }

    render(){
        const titletext = this.props.titletext;
        const introtext = this.props.introtext;
        const imgs = this.props.imgs;
        const imgName = this.props.imgName;
        const plate = this.props.plate;
        const platemin = this.props.platemin;
        const platehover = this.state.isPlateHover;
        const showslider = this.props.showslider;

        return (
        <div className="yunlaiwu">
            { titletext ? <YunlaiwuTitle text={titletext} /> : null }
            { introtext ? <YunlaiwuIntro text={introtext} /> : null }
            { plate ? <YunlaiwuPlate plate={plate} platehover={platehover} onPlateChange={this.handlePlateChange} /> : null }
            { platemin ? <YunlaiwuPlatemin platemin={platemin} platehover={platehover} /> : null }
            { imgs ? <YunlaiwuImg imgs={imgs} clsName={imgName} platehover={platehover} /> : null }
            { showslider ? <YunlaiwuSlider /> : null }
        </div>
        )
    }
}


export default Yunlaiwu;