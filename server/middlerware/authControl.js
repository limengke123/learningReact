/**
 * Created by li on 2017/9/14.
 */

const jwt =require('jsonwebtoken');
const {dbConfig} = require('../config/index');


const expiredTime = 60*30;
const sKeys = dbConfig.mongo.jwt.secret;


const generateToken = (data) =>{
    return jwt.sign(data, sKeys, {expiresIn:expiredTime});
};

module.exports = {
    generateToken,
};