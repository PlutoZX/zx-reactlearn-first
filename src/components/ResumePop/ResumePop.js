import React, { Component } from 'react';
import './ResumePop.css';




class ResumePop extends Component {

    render() {
        return (
            <div className="ResumePop">
                <div className="layer"></div>
                <div className="resume_pop_box">
                    {/*<h2>简历功能 全新上线 <i id="resume_close"><svg class="fonticon" aria-hidden="true"><use xlink:href="#icon-close"></use></svg></i></h2>*/}
                    <img src="https://yunlaiwu0.cn-bj.ufileos.com/resume_tips_modal_img1.png" alt="" class="img1" />
                    <div class="separate">以下服务即将推出，填写简历可优先体验</div>
                    <div class="server_box">
                        <div class="left">
                            <h3>与知名影视公司深度合作</h3>
                            <img src="https://yunlaiwu0.cn-bj.ufileos.com/resume_tips_modal_img3.png" alt="" class="img2" />
                        </div>
                        <div class="right">
                            <h3>与大咖编剧合作改编超级IP</h3>
                            <img src="https://yunlaiwu0.cn-bj.ufileos.com/resume_tips_modal_img2.png" alt="" class="img3" />
                        </div>
                    </div>
                    <div id="goresume" class="goresume">去填写</div>
                </div>
            </div>
        )
    }
}


export default ResumePop;