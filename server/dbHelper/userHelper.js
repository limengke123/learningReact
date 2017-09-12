/**
 * Created by li on 2017/9/12.
 */
const {User} = require('../model/index');

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
    addUser: async (ctx,user) => {
        user = await user.save().catch(err => {
            console.error(err);
            ctx.throw(500,'内部错误')
        });
        return user;
    },
    deleteUser: async (ctx,id) => {
        let flag = false;
        console.log('flag==========>' + flag);
        await User.remove(id, err => {
            console.log(err)
            flag = !err
        }).catch(err => {
            console.error(err);
            ctx.throw(500,'内部错误')
        });
        console.log('flag=====await=====>'+flag);
        return flag
    }
};

module.exports = userHelper;