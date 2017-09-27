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
            /**这里很奇怪，请求的时候会多一个article出来，暂时先请求一个绝对路径**/
            url:'/article/addArticle' //article/addArticle /user/login
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