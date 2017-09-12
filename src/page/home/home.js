import React from "react";
import {Link} from 'react-router';
import Line from '../../components/line/line';
import './home.less';

export default class HomePage extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
        }
    }
    render(){
        const data = {
            text:"最新发布"
        }
        return(
            <div className="home-page">
                <div className="content-left">
                    <Line data={data}/>
                </div>
                <div className="right"></div>
            </div>
        )
    }
}