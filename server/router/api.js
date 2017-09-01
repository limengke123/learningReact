/**
 * Created by li on 2017/8/30.
 */
const router = require('koa-router');

const api = new router();

api.get('/test',async (ctx) => {
    ctx.body = Math.random();
});

module.exports = api;