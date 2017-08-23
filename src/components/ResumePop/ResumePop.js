import React, { Component } from 'react';
import './ResumePop.css';


let styleObj = {
    ResumePopStyle: {
        display: 'block'
    }
};

class ResumePop extends Component {
    static defaultProps = {
        btntxt: '嘟嘟嘟'
    };


    constructor(props){
        super(props);

        this.state = {
            isShow: true
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleGoResume = this.handleGoResume.bind(this, 'lalalalala');
    }

    handleClose(e) {
        this.setState({
            isShow: false
        })
    }

    handleGoResume(txt,e){
        alert(1);
    }


    render() {
        const btntxt = this.props.btntxt || '去填写';


        return (
            <div className="ResumePop" style={this.state.isShow?{}:{display: 'none'}}>
                <div className="layer"></div>
                <div className="resume_pop_box">
                    <h2>简历功能 全新上线 <i id="resume_close" className="iconfont icon-close" onClick={this.handleClose} ></i></h2>
                    <img src="https://yunlaiwu0.cn-bj.ufileos.com/resume_tips_modal_img1.png" alt="" className="img1" />
                    <div className="separate">以下服务即将推出，填写简历可优先体验</div>
                    <div className="server_box">
                        <div className="left">
                            <h3>与知名影视公司深度合作</h3>
                            <img src="https://yunlaiwu0.cn-bj.ufileos.com/resume_tips_modal_img3.png" alt="" className="img2" />
                        </div>
                        <div className="right">
                            <h3>与大咖编剧合作改编超级IP</h3>
                            <img src="https://yunlaiwu0.cn-bj.ufileos.com/resume_tips_modal_img2.png" alt="" className="img3" />
                        </div>
                    </div>
                    <div id="goresume" className="goresume" onClick={this.handleGoResume}>{btntxt}</div>
                </div>
            </div>
        )
    }
}

export default ResumePop;
