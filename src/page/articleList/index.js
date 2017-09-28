/**
 * Created by li on 2017/9/28.
 */
import React from 'react';
import './index.less';
import {Table} from 'antd';
import moment from 'moment';
import {get} from '../../../utils/utils.js';

class ArticleList extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
            data:[],
            loading:false
        }
    }
    fetchData = ()=>{
        get('/article/list')
        .then(res=>{
            if(res.success===true){
                this.setState({
                    data:res.data,
                    loading:false
                })
            }
        })
    }
    componentDidMount(){
        this.fetchData()
    }
    render(){
        const columns = [{
            title: 'id',
            dataIndex: '_id',
            width: 150,
        },{
            title: 'title',
            dataIndex: 'title',
            width: 150,
        }, {
            title: 'content',
            dataIndex: 'content',
            width: 150,
        }, {
            title: 'updateTime',
            dataIndex: 'updateTime',
            render:(text,record,index)=>{
                return <span>{moment.unix(text/1000).format("YYYY-MM-DD HH:mm:ss")}</span>                
            },
            width: 150,
        }, {
            title: 'createTime',
            dataIndex: 'createTime',
            render:(text,record,index)=>{
                return <span>{moment.unix(text/1000).format("YYYY-MM-DD HH:mm:ss")}</span>
            }
        }];
        const {data,loading} = this.state;
        return (
            <div className="article-list">
                <Table
                    columns={columns} dataSource={data}
                    pagination={{pageSize:50}}
                    rowkey={record=>record._id}
                    loading={loading} bordered={true}
                />
            </div>
        )
    }
}

export default ArticleList;