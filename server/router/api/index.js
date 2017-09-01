/**
 * Created by li on 2017/8/30.
 */
const router = require('koa-router');
const apiController = require('./controller');

const api = new router();

api.get('/test',apiController.test);
api.get('/random',apiController.random);

module.exports = api;