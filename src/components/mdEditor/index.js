import React from 'react';
import {Input} from 'antd';
const {TextArea} = Input;
import './index.less';
import Remarkable from 'remarkable';

class MarkdownEditor extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            content: "",
            title: "",
            defaultContent: {
                content: "默认文本",
                title: "题目"
            }
        };
    }

    contentChange = (event) => {
        const target = event.target;
        this.setState({
            content: target.value
        })
    }
    titleChange = (event) => {
        const target = event.target;
        this.setState({
            title: target.value
        })
    }

    getRawMarkup = () => {
        const md = new Remarkable();
        return {
            __html: md.render(this.state.content)
        }
    }

    render() {
        const {title, content} = this.state.defaultContent;
        return (
            <div className="md-editor">
                <div className="title">
                    <Input onChange={this.titleChange}
                           name="title" placeholder={title}
                           style={{
                               height: "60px",
                               lineHeight: "60px",
                               fontSize: "24px",
                               border: "1px solid transparent"
                           }}/>
                </div>
                <div className="body">
                    <div className="rawInput">
                        <TextArea cols="30" rows="10" name="content"
                                  onChange={this.contentChange}
                                  autosize={{ minRows: 10 ,maxRows:30}}
                                  placeholder={content}
                        />
                    </div>
                    <div
                        className="output"
                        dangerouslySetInnerHTML={this.getRawMarkup()}
                    />
                </div>
            </div>
        )
    }
}

export default MarkdownEditor