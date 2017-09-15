/**
 * Created by li on 2017/9/15.
 */
const router = require('koa-router');
const articleController = require('../../controller/article/index');
const article = new router();

article.use('/article/list',articleController.getAllArticle);
article.use('/article/addArticle',articleController.addArticle);


module.exports = article;