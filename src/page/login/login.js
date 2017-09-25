'use strict';
import React from'react';
import {Link} from 'react-router';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import { post ,setCookie} from '../../../utils/utils';
const FormItem = Form.Item;
import './index.less'

class NormalLoginForm extends React.Component {
    constructor(){
        super(...arguments);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (e) {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                post('/user/login', values)
                    .then((res) => {
                        if (res) {
                            if(res.status === "success"){
                                message.info('登录成功');
                                alert(123);
                                console.log(1)
                                const userInfo = res.data;
                                setCookie('userInfo',JSON.stringify(userInfo))
                                this.context.router.push('/');
                            } else if(res.status === "error"){
                                message.info(res.msg)
                            }
                        } else {
                            message.info('服务端错误');
                        }
                    });
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/register">register now!</Link>
                </FormItem>
            </Form>
        );
    }
}
NormalLoginForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;