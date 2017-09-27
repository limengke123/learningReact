/**
 * Created by li on 2017/9/20.
 */
import React from 'react';
import MarkdownEditor from '../../components/mdEditor/index';
import './index.less'
class ArticleAdd extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            url:'article/addArticle' //article/addArticle /user/login
        }
    }
    render() {
        const {url} = this.state
        return (
            <div className="add-article">
                <MarkdownEditor url={url}/>
            </div>
        )
    }
}

export default ArticleAdd;