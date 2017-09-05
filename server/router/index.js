const router = require("koa-router")();


const home = require("./home/index");
const api = require("./api/index");
const spider = require("./spider/index");

router.use('/',home.routes(),home.allowedMethods());

router.use('/api',api.routes(),api.allowedMethods());

router.use('/spider',spider.routes(),spider.allowedMethods());


module.exports = router;