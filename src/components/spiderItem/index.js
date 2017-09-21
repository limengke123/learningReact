/**
 * Created by li on 2017/9/19.
 */
import React from 'react';
import './index.less'
class SpiderItem extends React.Component{
    handlerModel = (e)=>{
        e.preventDefault();

    }
    render(){
        const {title,avatar,time,place,author,excerpt,link} = this.props.section;
        return(
            <div className="spider-section">
                <h2 className="title"><a href={link} target="_blank">{title}</a></h2>
                <div className="info">
                    <img src={avatar} alt={author}/>
                    <span>{time}发布于</span>
                    <span>{place}</span>
                </div>
                <p className="excerpt">
                    {excerpt}
                </p>
            </div>
        )
    }
}

export default SpiderItem;