import React from 'react';
import MovieItem from '../movieItem/index';
import { get } from '../../../utils/utils';
export default class MovieContent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            sections: [],
            isLoading: true,
            type: this.props.type || ''
        }
    }
    fetchData = (page = 1) => {
        let url = `/spider/dytt?type=${type}&page=$`
    }
    componentDidMount = () => {
        this.fetchData();
    }
    onChange = (pageNum) => {
        this.setState({
            sections: [],
            isLoading: true
        });
        this.fetchData(pageNumber);
    }
    render() {
        const { type } = this.props;
        const content = this.state.sections.map((section, index) => {
            return (
                <MovieItem section key={index} />
            )
        })
        return (
            <div className="movie-content">

            </div>
        )
    }
}