/**
 * Created by li on 2017/9/22.
 */
const request = require("request-promise");
const cheerio = require("cheerio");
//const mkdirp = require('mkdirp');
const iconv = require('iconv-lite');

const dytt = async (ctx)=>{
    const url = "http://www.dytt8.net/html/gndy/dyzz/list_23_1.html";
    const buffer = await request({uri:url,encoding: null});
    const body = iconv.decode(buffer,'gbk')
    const $ = cheerio.load(body);
    //ctx.response.type = 'text';
    //ctx.response.setEncode('gbk');
    ctx.body = $(".co_content8").find("table").eq(0).find('.ulink').text()
};

module.exports = {
    dytt
};