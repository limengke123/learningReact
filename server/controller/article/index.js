/**
 * Created by li on 2017/9/15.
 */
const {articleHelper} = require('../../dbHelper/index');


const addArticle = async (ctx) => {
    const info = ctx.request.body;
    const doc = await articleHelper.addArticle(info);
    if(doc){
        ctx.body = {
            success:true,
            data : doc,
        }
    } else{
        ctx.body={
            success:false,
            data:'添加文章失败',
        }

    }
};

const getAllArticle = async (ctx) => {
    const data = await articleHelper.getAllArticle();
    ctx.body = {
        success:true,
        data:data
    }
};

module.exports = {
    addArticle,
    getAllArticle,
};