/**
 * Created by li on 2017/9/18.
 */
import React from 'react';
import './index.less';
import {get} from '../../../utils/utils';

class SpiderPage extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
            html:""
        };
        this.fetchData = this.fetchData.bind(this);
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData(){
        get('/spider/segement')
            .then(res=>res.json())
            .then(result=>{
                if(result){
                    this.state.html = result.data;
                }
            })
    }
    render(){
        const {html} = this.state;
        return(
            <div className="spider-page">
                {html}
            </div>
        )
    }
}

export default SpiderPage;