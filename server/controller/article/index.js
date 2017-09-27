/**
 * Created by li on 2017/9/15.
 */
const {articleHelper} = require('../../dbHelper/index');


const addArticle = async (ctx) => {
    const info = ctx.request.body;
    //const doc = await articleHelper.addArticle(info);
    if(info){
        ctx.body = {
            success:true,
            data : info,
        }
    } else{
        ctx.body={
            success:false,
            data:'添加文章失败',
        }

    }
};

const getAllArticle = async (ctx) => {
    ctx.body = {
        success:true,
        data:"all article!"
    }
};

module.exports = {
    addArticle,
    getAllArticle,
};