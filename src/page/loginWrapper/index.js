/**
 * Created by li on 2017/9/18.
 */
import React from 'react';
import './index.less'
class LoginWrapper extends React.Component{
    render(){
        const {children} = this.props;
        return(
            <div className="login-wrapper">
                <div className="content">
                    {children}
                </div>
            </div>
        )
    }
}


export default LoginWrapper;