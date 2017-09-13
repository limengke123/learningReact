'use strict';

import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.item;
import './manger.less'
class MangerPage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            expand: false
        };
    }


    render() {
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (
            <div className="manger-page">
            </div>
        )
    }
}



export default MangerPage;
