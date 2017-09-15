/**
 * Created by li on 2017/7/14.
 */
const koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const static = require("koa-static");
const path = require("path");
const indexRouter = require('./router/index');
const specialRouter = new Router();
const fs = require('fs');

const app = new koa();


const bundlePath = "../dist";
const staticPath = "../src";


//ctx.body解析中间件
app.use(bodyparser());

//打包文件路径
app.use(static(
    path.join(__dirname, bundlePath)
));

//图片资源路径
app.use(static(
    path.join(__dirname, staticPath)
));

app.use(indexRouter.routes()).use(indexRouter.allowedMethods());

//解决browserhistory刷新404问题
app.use(specialRouter.routes());

specialRouter.get('*', ctx => {
    //ctx.body = "a ha ";
    const htmlPath = path.resolve(__dirname,'../dist','index.html');
    ctx.type = 'html';
    ctx.body = fs.createReadStream(htmlPath);
});


module.exports = app;

/*
app.listen(port);

console.log(`server started on port ${port}`);*/
