import React from 'react';
import { Tabs, BackTop } from 'antd';
import MovieContent from '../../components/movieContent/index';
const TabPane = Tabs.TabPane;
import './index.less'
class MoviePage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            isLoading: true,
            sections: [
                {
                    tab: "最新电影",
                    type: "new"
                },
                {
                    tab: "欧美电影",
                    type: "oumei"
                },
                {
                    tab: "日韩电影",
                    type: "rihan"
                },
                {
                    tab: "国产电影",
                    type: "china"
                },
                {
                    tab: "综合电影",
                    type: "zonhe"
                },
            ]
        }
    }
    render() {
        const content =  this.state.sections.map((section, index) => {
            return (
                <TabPane key={index} tab={section.tab}>
                    <MovieContent type={section.type} />
                </TabPane>
            )
        })
        return (
            <div className="movie-page">
                <Tabs defaultActiveKey="0">
                    {content}
                </Tabs>
                <BackTop />
            </div>
        )
    }
}

export default MoviePage;