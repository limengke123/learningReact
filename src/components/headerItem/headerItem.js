import React from 'react';
import './headerItem.less';
const HeaderItem = (data)=>{
    return <li className="header-item">{data.text}</li>
}
export default HeaderItem;