/**
 * Created by li on 2017/9/18.
 */
import React from 'react';
import './index.less';
import SpiderContent from '../../components/spiderContent/index';
import {Tabs,BackTop} from 'antd';
const TabPane = Tabs.TabPane;

class SpiderPage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            sections: [],
            isLoading: true
        };
    }
    onChange(key){
        console.log(key)
    }
    render() {
        return (
            <div className="spider-page">
                <Tabs defaultActiveKey="1" onChange={this.onChange}>
                    <TabPane tab="推荐文章" key="1">
                        <SpiderContent/>
                    </TabPane>
                    <TabPane tab="最新文章" key="2">
                        <SpiderContent type="newest"/>
                    </TabPane>
                    <TabPane tab="热门文章" key="3">
                        <SpiderContent type="hottest"/>
                    </TabPane>
                </Tabs>
                <BackTop />
            </div>
        )
    }
}

export default SpiderPage;