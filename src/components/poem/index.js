/**
 * Created by li on 2017/9/13.
 */

import React from 'react';
import './index.less';

class Poem extends React.Component{
    render(){
        const poem = this.props.poemdata;
        return(
            <div className="poem">
                <div className="title">一首诗</div>
                <p>{poem}</p>
            </div>
        )
    }
}

export default Poem;