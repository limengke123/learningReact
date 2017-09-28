/**
 * Created by li on 2017/9/15.
 */

 const {Article} = require('../model/index');
 const getIncrementId = require('../model/common/counters');
module.exports = {
    getAllArticle: async () => {
            let query = Article.find({});
            let res = [];
            await query.exec((err, Article) => {
                if (err) {
                    console.log(err)
                    res = []
                } else {
                    res = Article;
                }
            });
            return res;
    },
    addArticle: async (info) => {
        try{
            info.uid = await getIncrementId('articles');
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