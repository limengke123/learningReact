import React from 'react';
import MovieItem from '../movieItem/index';
export default class MovieContent extends React.Component{
    constructor(){
        super(...arg);
    }
    render(){
        const {type} = this.props;
        return (
            <div className="movie-content">
                {}
            </div>
        )
    }
}