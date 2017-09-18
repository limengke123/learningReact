import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import App from "./app";
import './index.less'

render(
    <Provider>
        <App/>
    </Provider>,
    document.getElementById('app')
);
