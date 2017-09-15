/**
 * Created by li on 2017/9/15.
 */
module.exports = {
    getAllArticle: async () => {

    },
    addArticle: async (ctx,info) => {
        const doc = await info.save().catch(err=>{
            console.error(err);
        });
        if(doc){
            return doc
        } else{
            ctx.body = {
                success:false,
                data:"添加出错"
            }
        }

    }
};