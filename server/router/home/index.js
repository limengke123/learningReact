/**
 * Created by li on 2017/8/30.
 */

const router = require("koa-router");

const home = new router();

home.get('/',async (ctx)=>{
    ctx.body = '首页'
});

module.exports = home;
