import React from "react";
import {Link} from 'react-router';

export default class HomePage extends React.Component{
    constructor(){
        super(...arguments);
        this.getSpider = this.getSpider.bind(this);
        this.state = {
            html:""
        }
    }
    getSpider(){
        fetch('/api/test').then(res =>{res.json()}).then(res=>{
            this.setState({
                html:res
            })
        })
    }
    render(){
        const {html} = this.state;
        return(
            <div className="home-page">
                <button onClick={this.getSpider}>点击spider</button>
                <Link to="/list">to list-page!</Link>
                {
                    html ? <div className="html-container">{html}</div> : ""
                }
            </div>
        )
    }
}