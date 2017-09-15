/**
 * Created by li on 2017/9/15.
 */
const {articleHelper} = require('../../dbHelper/index');


const addArticle = async (ctx) => {
    const info = ctx.body;
    const doc = await articleHelper.addArticle(info);
    if(doc){
        ctx.body = {
            success:true,
            data : doc,
        }
    }
};

const getAllArticle = async (ctx) => {

};

module.exports = {
    addArticle,
    getAllArticle,
};