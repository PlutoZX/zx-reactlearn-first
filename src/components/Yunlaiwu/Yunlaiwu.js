import React, { Component } from 'react';
import './Yunlaiwu.css';



// 标题
function YunlaiwuTitle(props){
    return <h2 className="yunlaiwu_title" >{props.text}</h2>
}
// 介绍
function YunlaiwuIntro(props){
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

        return (
        <div className="yunlaiwu">
            <YunlaiwuTitle text={titletext}/>
            { introtext ? <YunlaiwuIntro text={introtext}/> : null }
            { plate ? <YunlaiwuPlate plate={plate} platehover={platehover} onPlateChange={this.handlePlateChange}/> : null }
            { platemin ? <YunlaiwuPlatemin platemin={platemin} platehover={platehover} /> : null }
            <YunlaiwuImg imgs={imgs} clsName={imgName} platehover={platehover}/>
        </div>
        )
    }
}


export default Yunlaiwu;