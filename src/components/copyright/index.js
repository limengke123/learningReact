/**
 * Created by li on 2017/9/13.
 */
import React from 'react';
import './index.less'
class Copyright extends React.Component{
    render(){
        const copyright = this.props.copyright;
        return(
            <div className="copyright">
                {copyright}
            </div>
        )
    }
}

export default Copyright;