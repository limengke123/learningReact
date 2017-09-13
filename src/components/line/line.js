import React from 'react';
import './line.less'
export default class Line extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div className="line-wrap">
                {
                    data.icon ? <img className="line-icon" src={data.icon.url} alt={data.icon.text}/> : ""
                }
                <span className="line">{data.text}</span>
            </div>
        )
    }
}
