/**
 * Created by li on 2017/9/19.
 */
import React from 'react';
import {Pagination,Spin} from 'antd';
import {get} from '../../../utils/utils';
import SpiderItem from '../spiderItem/index'
class SpiderContent extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            sections: [],
            isLoading: true,
            type:this.props.type || ""
        };
        this.fetchData = this.fetchData.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData(page = 1) {
        let url = `/spider/segement?type=normal`;
        if(this.state.type){
            url = `/spider/segement?type=${this.state.type}`
        }
        url = page === 1 ? url : `${url}&page=${page}`;
        get(url)
            .then(result => {
                if (result.success === true) {
                    this.setState({
                        sections: result.data,
                        isLoading: false,
                    });
                }
            })
    }

    onChange(pageNumber, pageSize) {
        this.setState({
            sections: [],
            isLoading: true
        });
        this.fetchData(pageNumber);
    }

    render() {
        let sectionList = this.state.sections.map((section,index )=> {
            return (
                <SpiderItem section={section} key={index}/>
            )
        });
        return (
            <div className="spider-content">
                <Spin spinning={this.state.isLoading}>
                    {sectionList}
                </Spin>
                <Pagination onChange={this.onChange} total={100}/>
            </div>
        )
    }
}

export default SpiderContent;