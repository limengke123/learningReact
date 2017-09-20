import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import App from "./app";
import './index.less'

//强化后的store生成函数
import finalCreateStore from './store/index';
//总的reducer
import reducer from './reducers/index';

const store = finalCreateStore(reducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);
