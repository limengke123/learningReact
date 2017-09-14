const request = require('request-promise');
const iconv = require('iconv-lite');
const {getRandom} = require('../../../utils/utils');
const apiController = {
    test: async function (ctx) {
        const url = 'http://www.dytt8.net/';
        const body = await request.get(url);
        ctx.response.type = "text";
        ctx.body = body
    },
    random: async function (ctx) {
        if (ctx.request.body) {
            const bodyData = ctx.request.body;
            const startNum = bodyData.startNum;
            const endNum = bodyData.endNum;
            ctx.body = getRandom(startNum,endNum)
        } else {
            ctx.body = getRandom(1, 100)
        }
    }
};

module.exports = apiController;