/**
 * Created by li on 2017/9/12.
 */

const {userHelper} = require('../../dbHelper/index');
const {User} = require('../../model/index');
const {codeStatus} = require('../../config/index');
const {common , account} = codeStatus;
const {generateToken,} = require('../../middlerware/authControl');
const AUTHORIZATION = 'Authorization';

const addUser = async function (ctx) {
    const user = new User({
        name: "limengke2",
        password: "123456",
        email: "75214023@qq.com"
    });
    const data = await userHelper.addUser(ctx, user);
    ctx.body = {
        success: true,
        data
    }
};
const deleteUser = async (ctx) => {
    let data = await userHelper.deleteUser(ctx, {name: "limengke2"});
    ctx.body = {
        success: true,
        data
    }
};
const findAllUser = async (ctx) => {
    const data = await userHelper.findAllUser();
    ctx.body = {
        success: true,
        data: data
    }
};
const update = async (ctx) => {
};
const login = async (ctx) => {
    const userInfo = ctx.request.body;
    console.log('Req:', userInfo);
    const res = await userHelper.login(userInfo);
    console.log('loginData:', res);
    if (res && res.data) {
        const tokenInfo = {username: res.data.username};
        const token = generateToken(tokenInfo);
        ctx.response.set(AUTHORIZATION, token);
        ctx.body = res;
    } else {
        ctx.body = res;
    }
};
const register = async function (ctx, next) {
    const userInfo = ctx.request.body;
    const data = await userHelper.register(userInfo);
    if (data) {
        ctx.body = Object.assign({data: data}, common.success);
    } else {
        ctx.body = Object.assign({data: null}, account.dupName);
    }
};
const logout = async function (ctx, next) {
    ctx.response.set(AUTHORIZATION, '');
    ctx.body = Object.assign({data: true}, common.success);
};


module.exports = {
    addUser,
    deleteUser,
    findAllUser,
    update,
    login,
    register,
    logout,
};