/**
 * Created by li on 2017/9/1.
 */
const router = require("koa-router");

const {spiderController} = require("../../controller/index");

const spider = new router();

spider.get('/segement',spiderController.segementfaultBlogs);


module.exports = spider;