import React from 'react';
import './index.less';
import Remarkable from 'remarkable';

export default class MarkdownEditor extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: "默认文本"
        };
    }

    handleChange = () => {
        this.setState({
            value: this.refs.textarea.value
        })
        console.log(this.refs.textarea.value)
    }

    getRawMarkup = () => {
        const md = new Remarkable();
        return {
            __html: md.render(this.state.value)
        }
    }

    render() {
        const { value } = this.state;
        return (
            <div className="md-editor">
                <div className="rawInput">
                    <h2>此处输入文本</h2>
                    <textarea cols="30" rows="10" ref="textarea"
                        onChange={this.handleChange}
                        defaultValue={value} />
                </div>
                <div
                    className="output"
                    dangerouslySetInnerHTML={this.getRawMarkup()}
                />
            </div>
        )
    }
}