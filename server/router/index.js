const router = require("koa-router")();


const home = require("./home/index");
const api = require("./api/index");

router.use('/',home.routes(),home.allowedMethods());

router.use('/api',api.routes(),api.allowedMethods());


module.exports = router;