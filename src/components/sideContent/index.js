/**
 * Created by li on 2017/9/13.
 */
import React from 'react';
import './index.less';
import SideItem from '../sideItem/index';

class SideContent extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
            items:[
                {
                    name:"wo",
                    text:"如果一分钟不够的话",
                    style:{
                        height:"100px"
                    }
                },
                {
                    name:"ni",
                    text:"那也没办法了",
                    style:{
                        height:"150px"
                    }
                }
            ]
        }
    }
    render(){
        return(
            <div className="side-content">
                {
                    this.state.items.map((item,index)=>{
                        return(
                            <SideItem sideData={item} key={index}/>
                        )
                    })
                }
            </div>
        )
    }
}

export default SideContent;