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
                    url: "/list",
                    id: 3
                }, {
                    text: "一分钟",
                    url: "/list",
                    id: 4
                },
            ]
        }


    }

    render() {
        let headerItem = this.state.items.map(item => {
            return (
                <HeaderItem data={item} key={item.id}/>
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
