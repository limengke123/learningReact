/**
 * Created by li on 2017/9/13.
 */
import React from 'react';
import './index.less';
import CardItem from '../cardItem/cardItem';
class HomeContent extends React.Component {
    constructor(){
        super(...arguments);
        this.state = {
            items:[
                {
                    user:"limengke",
                    age:"199"
                },{
                    user:"limengke",
                    age:"199"
                },
            ]
        }
    }
    render() {
        const homeContent = this.state.items.map((item,index)=>{
            return(
                <CardItem data={item} key={index}/>
            )
        });
        return (
            <div className="home-content">
                {homeContent}
            </div>
        )
    }
}

export default HomeContent;