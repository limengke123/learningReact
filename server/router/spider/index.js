/**
 * Created by li on 2017/9/1.
 */
const router = require("koa-router");

const {spiderController} = require("../../controller/index");
const {segementfault} = spiderController;
const {DYTT} = spiderController;
const spider = new router();

spider.get('/segement',segementfault.segementfaultBlogs);
spider.get('/segement/detail',segementfault.segementfaultDetailPage);
spider.get('/dytt',DYTT.dytt);


module.exports = spider;