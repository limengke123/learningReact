import React from 'react';
import Poem from '../poem/index';
import Copyright from '../copyright/index';
import './footer.less';

export default class Footer extends React.Component{
    constructor(){
        super(...arguments);
        this.state = {
            poem:`秋风萧萧愁杀人，出亦愁，入亦愁。座中何人，谁不怀忧。令我白头。
                  胡地多飚风，树木何修修。离家日趋远，衣带日趋缓。
                  心思不能言，肠中车轮转。`,
            copyright:"持续搬砖中······"
        }
    }
    render(){
        const {poem,copyright} = this.state;
        return(
            <div className="footer-wrap">
                <Poem poemdata={poem}/>
                <Copyright copyright={copyright}/>
            </div>
        )
    }
}