const router = require("koa-router")();


const home = require("./home/index");
const api = require("./api/index");
const spider = require("./spider/index");
const user = require("./user/index");

router.use('/', home.routes(), home.allowedMethods());

router.use('/api', api.routes(), api.allowedMethods());

router.use('/spider', spider.routes(), spider.allowedMethods());

router.use('/user',user.routes(),user.allowedMethods());

module.exports = router;