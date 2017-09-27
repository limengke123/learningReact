/**
 * Created by li on 2017/9/12.
 */

const apiController = require('./api/index');
const spiderController = require('./spider/index');
const userController = require('./user/index');
const articleController = require('./article/index')
const mainController = {
    apiController,
    spiderController,
    userController,
    articleController,
};

module.exports = mainController;