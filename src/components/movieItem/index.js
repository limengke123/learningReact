import React from 'react';
import './index.less';

export default class MovieItem extends React.Component{
    render(){
        const {title,link,info,content} = this.props.section;
        return (
            <div className="movie-item">
                <h2 className="title"><a href={link} target="_blank">{title}</a></h2>
                <div className="info">
                    {info}
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        )
    }
}