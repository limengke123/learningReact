import React from "react";
import {Link} from 'react-router';

export default class HomePage extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
        }
    }
    render(){
        return(
            <div className="home-page">
                <Link to="/list">to list-page!</Link>
            </div>
        )
    }
}