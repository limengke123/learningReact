import React from 'react';

export default class Line extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div className="line-wrap">
                {
                    data.icon ? <i>icon</i> : ""
                }
                <span className="line">{data.text}</span>
                <span></span>
            </div>
        )
    }
}
