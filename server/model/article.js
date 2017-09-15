/**
 * Created by li on 2017/9/15.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const COLLECTION = 'article';

const ArticleSchema = new Schema({
    uid:{type:Number},
    title:{
        type:String,
        trim:true,
        required:true,
        index:true
    },
    createTime:{
        type:Number,
        default:Date.now()
    },
    updateTime:Number,
    text:String,
});

ArticleSchema.set('autoIndex',true);
const Article = mongoose.model(COLLECTION,ArticleSchema);
module.exports = Article;

