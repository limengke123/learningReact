'use strict';

import React from 'react';
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
//import style from './mangerPage';
import './manger.less'
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class MangerPage extends React.Component {
    render () {
        const {children} = this.props;
        return (
            <div className="manger-page">
                <header className="header">
                    <Link to="/">ReactManager</Link>
                </header>

                <main className="main">
                    <div className="menu">
                        <Menu mode="inline" theme="dark" style={{width: '240px'}}>
                            <SubMenu key="user" title={<span><Icon type="user"/><span>用户管理</span></span>}>
                                <MenuItem key="user-list">
                                    <Link to="/user/list">用户列表</Link>
                                </MenuItem>
                                <MenuItem key="user-add">
                                    <Link to="/user/add">添加用户</Link>
                                </MenuItem>
                            </SubMenu>

                            <SubMenu key="book" title={<span><Icon type="book"/><span>图书管理</span></span>}>
                                <MenuItem key="book-list">
                                    <Link to="/book/list">图书列表</Link>
                                </MenuItem>
                                <MenuItem key="book-add">
                                    <Link to="/book/add">添加图书</Link>
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </div>

                    <div className="content">
                        {children}
                    </div>
                </main>
            </div>
        );
    }
}



export default MangerPage;
