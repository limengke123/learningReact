import React from 'react';
import './header.less';
import HeaderItem from '../headerItem/headerItem';

export default class Header extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            items: [
                {
                    text: "首页",
                    url: "/",
                    selected:true,
                    id: 1
                }, {
                    text: "列表",
                    url: "/list",
                    id: 2
                }, {
                    text: "凤梨罐头",
                    url: "/manger",
                    id: 3
                }, {
                    text: "一分钟",
                    url: "/login",
                    id: 4
                }, {
                    text: "命运",
                    url: "/spider",
                    id: 5
                },{
                    text: "秋刀鱼",
                    url: "/movie",
                    id: 6
                },
            ]
        }
    }

    render() {
        let headerItem = this.state.items.map((item,index) => {
            return (
                <HeaderItem data={item} key={index}/>
            )
        });
        return (
            <div className="header-wrap">
                <div className="header">
                    <img src={require('../../static/image/logo_dog.png')} className="logo-pic"/>
                    <div className="item-wrap">
                        {headerItem}
                    </div>
                </div>
            </div>
        )
    }
}
