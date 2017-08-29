/**
 * Created by li on 2017/7/14.
 */
const koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const static = require("koa-static");
const path = require("path");
const port = "8080";

const app = new koa();
const home = new Router();

const staticPath = "../src";


//ctx.body解析中间件
app.use(bodyparser());

app.use(static(
    path.join( __dirname,  "../dist")
));



app.listen(port);

console.log(`server started on port ${port}`);