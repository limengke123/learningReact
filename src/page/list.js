import React from 'react';
import {Link} from 'react-router';


export default class List extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
            count : ""
        };
        //this.getCount = this.getCount.bind(this);
    };
    componentDidMount(){
        this.getCount();
    }
    getCount(){
        fetch('/api/random').then(res=>res.json())
            .then(count=>{
                this.setState({
                    count
                })
            })
    }
    render(){
        const count = this.state.count;
        return(
            <div className="list-page">
                <button onClick={this.getCount.bind(this)}>点击</button>
                <div>{count}</div>
                <Link to="/">to home-page</Link>
            </div>
        )
    }
}