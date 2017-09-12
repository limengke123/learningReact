/**
 * Created by li on 2017/9/12.
 */

const {userHelper} = require('../../dbHelper/index');
const {User} = require('../../model/index');
const {addUser,deleteUser,findAllUser} = userHelper;
const userController = {
    addUser: async function(ctx){
        const user = new User({
            name:"limengke2",
            password:"123456",
            email:"75214023@qq.com"
        });
        const data= await addUser(ctx,user);
        ctx.body = {
            success:true,
            data
        }
    },
    deleteUser : async (ctx)=>{
        let data = await deleteUser(ctx,{name:"limengke2"});
        ctx.body= {
            success:true,
            data
        }
    },
    findAllUser : async (ctx) =>{
        const data = await findAllUser();
        ctx.body = {
            success:true,
            data:data
        }
    },
    update: async (ctx)=>{

    }
};

module.exports = userController;