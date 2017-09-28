import React from 'react';
import { Input, Button, message, Modal } from 'antd';
const { TextArea } = Input;
const { confirm } = Modal;
import { post } from '../../../utils/utils';
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
            },
            isLoading: false,
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
    onSubmit = () => {
        const { content, title } = this.state;
        const { url } = this.props;
        if (!content || !title) {
            const msg = `title和conten别为空嘛`;
            message.error(msg);
            return false;
        }
        confirm({
            title: "提交么？",
            content: "提交了，就不能撤销了噢",
            okText: "yes",
            cancelText: "No",
            onOK:function(){
                console.log('ok');
                post(url, {
                    content,
                    title
                }).then(res => {
                    console.log(res);
                    if (res.success === true) {
                        message.success('提交成功了噢，不能反悔')
                    } else {
                        message.error(`提交出毛病了，问题可能是${res.data}`)
                    }
                }
                    )
            },
            onCancel:function(){
                console.log('cancel');
                message.success('那就不提交呗')
            }
        })


    }

    render() {
        const { title, content } = this.state.defaultContent;
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
                        }} />
                    <Button
                        loading={this.state.isLoading}
                        onClick={this.onSubmit}>
                        提交
                        </Button>
                </div>
                <div className="body">
                    <div className="rawInput">
                        <TextArea cols="30" rows="10" name="content"
                            onChange={this.contentChange}
                            autosize={{ minRows: 10, maxRows: 30 }}
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