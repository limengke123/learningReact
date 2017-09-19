/**
 * Created by li on 2017/9/19.
 */
import thunk from 'redux-thun';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';

//调用日志打印方法
const loggerMiddleware = createLogger();

//创建中间件集合
const middleware = [thunk, loggerMiddleware];

//compose增强store
const finalCreateStore = compose(
    applyMiddleware(...middleware)
)(createStore);

export default finalCreateStore;