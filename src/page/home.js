import React from "react";
import {Link} from 'react-router';

export default class HomePage extends React.Component{
    render(){
        return(
            <div className="home-page">
                <Link to="/list">to list-page!</Link>
            </div>
        )
    }
}