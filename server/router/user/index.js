/**
 * Created by li on 2017/9/14.
 */
const router = require('koa-router');
const {userController} = require('../../controller/index')
const user = new router();

user.post('/login',userController.login);
user.post('/register',userController.register);
user.get('/getAll',userController.findAllUser);
//user.post('/signUp',userController.signUp);

module.exports = user;