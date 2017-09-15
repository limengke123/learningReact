/**
 * Created by li on 2017/9/12.
 */
const {User} = require('../model/index');
const mongoose = require('mongoose');
const {codeStatus} = require('../config/index');
const {common, account} = codeStatus;
//const getIncrementId = require('../model/common/counters');

//const COLLECTTION = 'User';
//const User = mongoose.model(COLLECTTION);
const userHelper = {
    findAllUser: async () => {
        let query = User.find({});
        let res = [];
        await query.exec((err, users) => {
            if (err) {
                res = []
            } else {
                res = users;
            }
        });
        return res;
    },
    addUser: async (ctx, user) => {
        user = await user.save().catch(err => {
            console.error(err);
            ctx.throw(500, '内部错误')
        });
        return user;
    },
    deleteUser: async (ctx, id) => {
        let flag = false;
        console.log('flag==========>' + flag);
        await User.remove(id, err => {
            console.log(err);
            flag = !err
        }).catch(err => {
            console.error(err);
            ctx.throw(500, '内部错误')
        });
        console.log('flag=====await=====>' + flag);
        return flag
    },
    login: async function (info) {
        try {
            const doc = await User.findOne({username: info.username});
            if (doc) {
                let res = null;
                if (info.password === doc.password) {
                    const data = {
                        /*uid: doc.uid,*/
                        username: doc.username,
                        email: doc.email
                    };
                    res = Object.assign({data: data}, common.success);
                } else {
                    res = Object.assign({data: null}, account.pwdError);
                }
                return res;
            } else {
                return Object.assign({data: null}, account.notUser);
            }
        } catch (err) {
            //logger.error('---------------The login action DB-Error:', err);
            console.log('---------------The login action DB-Error:', err);
            return Object.assign({data: null}, common.error);
        }
    },
    register: async function (info) {
        try {
            //const uid = await getIncrementId("users");
            //const uid = "48454545445";
            //info.uid = uid;
            info.updateTime = Date.now();
            const doc = await User.create(info);
            if (doc) {
                return {
                    username: doc.username,
                    email: doc.email
                }
            }
        } catch (err) {
            //logger.error('---------------The register action DB-Error:', err);
            console.log('---------------The register action DB-Error:', err);
            return null;
        }
    },
};

module.exports = userHelper;