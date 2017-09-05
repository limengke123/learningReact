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
                    url:"/home",
                    key:1
                },
                {
                    text:"列表",
                    url:"/list",
                    key:2
                }
            ]
        }


    }

    render() {
        const headerItem = this.state.items.map((item,index)=>{
            return (
                <ul>
                    <HeaderItem data={item} key={item.key}/>
                </ul>
            )
        })
        return (
            <div className="header">
                <img src={require('../../static/image/logo_dog.png')} className="logo-pic"/>
                {headerItem}
            </div>
        )
    }
}