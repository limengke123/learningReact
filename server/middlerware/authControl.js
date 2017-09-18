/**
 * Created by li on 2017/9/14.
 */

const jwt = require('jsonwebtoken');
const {dbConfig} = require('../config/index');
const AUTHORIZATION = "Authorization";
const {codeStatus} = require('../config/index');
const {common} = codeStatus;


const expiredTime = 60 * 30;
const sKeys = dbConfig.mongo.jwt.secret;


const generateToken = (data) => {
    return jwt.sign(data, sKeys, {expiresIn: expiredTime});
};

const handleTokenError = (ctx, msg) => {
    ctx.response.set(AUTHORIZATION, '');
    switch (msg) {
        case 'jwt expired':
            ctx.body = Object.assign({data: null}, common.notLogin);
            break;
        case 'invalid token':
            ctx.body = Object.assign({data: null}, common.invalidToken);
            break;
        case 'jwt malformed':
            ctx.body = Object.assign({data: null}, common.errorToken);
            break;
        default:
            ctx.body = Object.assign({data: null}, common.errorToken);
    }
};

const authVerify = async (ctx, next) => {
    const token = ctx.cookies.get('token');
    if (!token) {
        ctx.body = Object.assign({data: null}, common.notLogin);
        return;
    }
    try {
        const tokenContent = await jwt.verify(token, sKeys);
        console.log('----------verify tokenContent:', tokenContent);
        console.log("Authentication success!");
        await next();
    } catch (err) {
        console.log('---------------Verify Error:', err);
        if (err && err.message) {
            handleTokenError(ctx, err.message);
        } else {
            ctx.body = Object.assign({data: null}, common.error);
        }
    }
};

module.exports = {
    generateToken,
    authVerify,
};