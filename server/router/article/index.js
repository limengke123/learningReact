/**
 * Created by li on 2017/9/15.
 */
const router = require('koa-router');
const {articleController} = require('../../controller/index');
const article = new router();

article.post('/addArticle', articleController.addArticle);
article.get('/list', articleController.getAllArticle);


module.exports = article;