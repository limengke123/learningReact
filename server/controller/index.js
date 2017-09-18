/**
 * Created by li on 2017/9/12.
 */

const apiController = require('./api/index');
const spiderController = require('./spider/spiderController');
const userController = require('./user/index');

const mainController = {
    apiController,
    spiderController,
    userController,
};

module.exports = mainController;