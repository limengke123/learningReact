const request = require('request-promise');
const iconv = require('iconv-lite');
const test = async function(ctx){
    const url = 'http://www.xieet.com/shaonv/';
    const body = await request.get(url);
    ctx.response.type= "text";
    //console.log(iconv.decode(body,'utf-8'));
    //console.log(body);
    ctx.body = body
};

const random = async function(ctx){
    ctx.body = Math.random()
};

module.exports = {
    test,
    random
};