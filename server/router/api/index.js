/**
 * Created by li on 2017/8/30.
 */
const router = require('koa-router');
const {apiController} = require('../../controller/index');
const {userController} = apiController;

const api = new router();

api.get('/test',apiController.test);
api.post('/random',apiController.random);
api.get('/addUser',userController.addUser);
api.get('/removeUser',userController.deleteUser);
api.get('/getAll',userController.findAllUser);

module.exports = api;