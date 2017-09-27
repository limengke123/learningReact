/**
 * Created by li on 2017/9/15.
 */

 const {Article} = require('../model/index');
 const getIncrementId = require('../model/common/counters');
module.exports = {
    getAllArticle: async () => {

    },
    addArticle: async (info) => {
        try{
            const uid = await getIncrementId('articles');
            info.uid = uid;
            const doc = await Article.create(info);
            if(doc){
                return {
                    uid:doc.uid,
                    title:doc.title,
                    content:doc.content
                }
            }
        }catch(err){
            console.log('---------------The register action DB-Error:', err);
            return null;
        }
    }
};