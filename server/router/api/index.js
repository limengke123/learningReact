/**
 * Created by li on 2017/8/30.
 */
const router = require('koa-router');
const {apiController} = require('../../controller/index');
//const article = require('../article/index');

const api = new router();

api.get('/test',apiController.test);
api.post('/random',apiController.random);
/**不知道为啥不能嵌套路由，有空调试**/
//api.use('/article',article.routes(),article.allowedMethods())

module.exports = api;