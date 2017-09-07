import React from 'react';
import './headerItem.less';
import {Link} from 'react-router';
class HeaderItem extends React.Component{
    constructor(){
        super(...arguments)
    }
    render(){
        const data = this.props.data;
        const className = data.selected ? "header-item selected" : "header-item";
        return(
            <Link className={className} to={data.url}>
                {data.text}
            </Link>
        )
    }
}

HeaderItem.defaultProps = {
    text:"默认样式",
    url:"/home"
};
export default HeaderItem;
