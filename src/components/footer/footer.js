import React from 'react';
import Line from '../line/line';

export default class Footer extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
        }
    }
    render(){
        const data = {text:"footer"};
        return(
            <div className="footer-wrap">
                <Line data={data}/>
            </div>
        )
    }
}