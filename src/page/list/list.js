import React from 'react';
import {Link} from 'react-router';


export default class List extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            count: "",
            isCount:false
        };
    };
    render() {
        return (
            <div className="list-page">

            </div>
        )
    }
}