/**
 * Created by li on 2017/9/12.
 */

const apiController = require('./apiController');
const spiderController = require('./spiderController');

const mainController = {
    apiController,
    spiderController,
};

module.exports = mainController;