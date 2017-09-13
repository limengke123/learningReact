/**
 * Created by li on 2017/9/13.
 */
import React from 'react';
import './index.less';
class CardItem extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="card-item">
                <div className="media-left"></div>
                <div className="media-right"></div>
            </div>
        )
    }
}

export default CardItem;