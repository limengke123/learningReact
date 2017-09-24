import React from 'react';
import MovieItem from '../movieItem/index';
import { get } from '../../../utils/utils';
import {Pagination,Spin} from 'antd';
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
        let url = `/spider/dytt?type=${this.state.type}&page=${page}`;
        get(url)
            .then(res => {
                if (res.success === true) {
                    this.setState({
                        sections: res.data,
                        isLoading: false,
                    })
                }
            })
    }
    componentDidMount = () => {
        this.fetchData();
    }
    onChange = (pageNum) => {
        this.setState({
            sections: [],
            isLoading: true
        });
        this.fetchData(pageNum);
    }
    render() {
        const { type } = this.props;
        const content = this.state.sections.map((section, index) => {
            return (
                <MovieItem section={section} key={index} />
            )
        })
        return (
            <div className="movie-content">
                <Spin spinning={this.state.isLoading}>
                    {content}
                </Spin>
                <Pagination onChange={this.onChange} total={100} />
            </div>
        )
    }
}