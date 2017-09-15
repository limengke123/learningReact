/**
 * Created by li on 2017/8/30.
 */

const router = require("koa-router");
const path = require('path');

const home = new router();

home.get('/',async (ctx)=>{
    ctx.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});


module.exports = home;
