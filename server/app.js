/**
 * Created by li on 2017/7/14.
 */
const koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const static = require("koa-static");
const path = require("path");
const indexRouter = require('./router/index');

const app = new koa();


const staticPath = "../dist";


//ctx.body解析中间件
app.use(bodyparser());

app.use(static(
    path.join( __dirname,  staticPath)
));

app.use(indexRouter.routes()).use(indexRouter.allowedMethods());


module.exports =  app;

/*
app.listen(port);

console.log(`server started on port ${port}`);*/
