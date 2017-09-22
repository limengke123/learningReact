/**
 * Created by li on 2017/9/20.
 */
import React from 'react';

class ArticleAdd extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            text:"# This is a header\n\nAnd this is a paragraph\n\n```\naha\n```"
        }
        //this.handlerChange = this.handlerChange.bind(this)
    }
    handlerChange = (value)=>{
        /*this.setState({
            text:value
        })*/
        console.log(value)
    };
    render() {
        return (
            <div className="add-article">

            </div>
        )
    }
}

export default ArticleAdd;