import React, {Component} from 'react';
import logo from './static/logo.svg';
import './App.css';
import {ImageBox, NameBox, SimpleSlider1, ResumePop, Yunlaiwu, Calculator} from './components/index.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <SimpleSlider1 />

                <ResumePop />

                <Yunlaiwu
                    titletext="云莱坞是什么"
                    introtext="专业的编剧社区与影视版权交易平台，免费帮作者出售作品，快速帮影视人找到好故事"
                    imgs={[
                        'https://yunlaiwu0.cn-bj.ufileos.com/%E4%BA%91%E8%8E%B1%E5%9D%9E%E6%98%AF%E4%BB%80%E4%B9%88%402x.png'
                    ]}
                    imgName="whatimg"
                />
                <Yunlaiwu
                    titletext="云莱坞可以做什么"
                    plate={[
                        '线上版权交易',
                        '免费版权保护',
                        '连结行业资源'
                    ]}
                    platemin={[
                        '聚合海量故事与编剧，精准推荐给10000+影视人，3000+影视机构',
                        '与中国版权保护中心战略合作，为写作者免费提供版权保护服务',
                        '新编剧大赛，闪电征稿，编剧沙龙……连结行业资源，助力新编剧快速成长'
                    ]}
                    imgs={[
                        'https://yunlaiwu0.cn-bj.ufileos.com/%E4%BA%91%E8%8E%B1%E5%9D%9E%E5%81%9A%E4%BB%80%E4%B9%881%402x%281%29.png',
                        'https://yunlaiwu0.cn-bj.ufileos.com/%E4%BA%91%E8%8E%B1%E5%9D%9E%E5%81%9A%E4%BB%80%E4%B9%882%402x.png',
                        'https://yunlaiwu0.cn-bj.ufileos.com/%E4%BA%91%E8%8E%B1%E5%9D%9E%E5%81%9A%E4%BB%80%E4%B9%883%402x.png'
                    ]}
                    imgName="canduimg"
                />
                <Yunlaiwu
                    titletext="如何在云莱坞进行交易" 
                    introtext="简单四步轻松搞定"
                    imgs={[
                        'http://yunlaiwu0.cn-bj.ufileos.com/buzhou.png'
                    ]}
                    imgName="tradeimg"
                />
                <Yunlaiwu
                    titletext="成交案例"
                    introtext="云莱坞影视版权成交金额过亿"
                    showslider={!!1}
                />


            </div>
        )
    }
}


export default App;