import React from "react";
import {Link} from 'react-router';
import Line from '../../components/line/line';
import './home.less';
import MainContent from '../../components/homeContent/homeContent';
import SideContent from '../../components/sideContent/index';

export default class HomePage extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
        }
    }
    render(){
        const leftData = {
            text:"最新发布",
            icon:{
                text:"最新发布",
                url:"../../static/image/publish.svg"
            }
        };
        return(
            <div className="home-page">
                <div className="content-left">
                    <Line data={leftData}/>
                    <MainContent/>
                </div>
                <div className="content-right">
                    <SideContent/>
                </div>
            </div>
        )
    }
}