/**
 * Created by li on 2017/9/15.
 */
import React from 'react';
import './index.less';
import { Table } from 'antd';
import moment from 'moment';

class UserList extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
            data:[],
            loading:false
        }
    }
    fetchData (){
        fetch('/user/getAll')
            .then(res=>res.json())
            .then(result => {
                if(result.success === true){
                    this.setState({
                        data:result.data,
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
            title: 'username',
            dataIndex: 'username',
            width: 150,
        }, {
            title: 'password',
            dataIndex: 'password',
            width: 150,
        }, {
            title: 'email',
            dataIndex: 'email',
            width: 150,
        }, {
            title: 'createTime',
            dataIndex: 'createTime',
            render:(text,record,index)=>{
                return <span>{moment.unix(text/1000).format("YYYY-MM-DD HH:mm:ss")}</span>
            }
        }];
        const {data} = this.state;
        return(
            <div className="user-list">
                <Table
                    columns={columns} dataSource={data}
                    pagination={{ pageSize: 50 }} rowkey={record=>record._id}
                    loading={this.state.loading} bordered={true}/>
            </div>
        )
    }
}

export default UserList;