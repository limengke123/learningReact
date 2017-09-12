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

    /*componentDidMount() {
        //this.getCount();
    }*/

    /*getCount() {
        fetch('/api/random', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                startNum: 1,
                endNum: 10
            })
        }).then(res => res.json())
            .then(count => {
                this.setState({
                    count
                })
            })
    }*/

    render() {
        return (
            <div className="list-page">

            </div>
        )
    }
}