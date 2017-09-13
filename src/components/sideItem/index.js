/**
 * Created by li on 2017/9/13.
 */
import React from 'react';
import './index.less';
import Line from '../line/line';

class SideItem extends React.Component{
    render(){
        const sideData = this.props.sideData;
        const {style} = sideData;
        return(
            <div className="side-item">
                <Line data={sideData}/>
                <div className="side-content" style={style}></div>
            </div>
        )
    }
}

export default SideItem;