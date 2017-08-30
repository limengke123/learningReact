const router = require("koa-router")();

const home = require("./home");
const api = require("./api");

router.use('/',home.routers(),home.allowedMthods());
router.use('/api',api.routers(),api.allowedMthods());


module.exports = router;