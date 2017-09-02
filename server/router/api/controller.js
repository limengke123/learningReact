const request = require('request-promise');
const iconv = require('iconv-lite');
const test = async function(ctx){
    const url = 'http://www.xieet.com/meinv/230.html';
    const body = await request.get({url,gzip:true});
    ctx.response.type= "text";
    const body1 = iconv.decode(body,'gb2312');
    //console.log(iconv.decode(body,'utf-8'));
    //console.log(iconv.decode(body,'gb2312'));
    //console.log(body);
    ctx.body = body1
};

const random = async function(ctx){
    ctx.body = Math.random()
};

module.exports = {
    test,
    random
};