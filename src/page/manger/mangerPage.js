'use strict';

import React from 'react';
import {Form,Input} from 'antd';
const FormItem = Form.item;
import './manger.less'
class MangerPage extends React.Component{
    constructor(){
        super(...arguments);
    }
    render(){
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return(
            <div className="manger-page">
                {/*<Form>
                    <FormItem
                        {...formItemLayout}
                        label="username">
                        {getFieldDecorator('username', {
                            rules: [{
                                required: true,
                                message: 'Please input your name',
                            }],
                        })(
                            <Input placeholder="Please input your name" />
                        )}
                    </FormItem>
                </Form>*/}
            </div>
        )
    }
}

export default MangerPage;
