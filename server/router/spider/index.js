/**
 * Created by li on 2017/9/1.
 */
const router = require("koa-router");

const spiderController = require("./controller");

const spider = new router();

spider.get('/dowload',spiderController.dowload);


module.exports = spider;