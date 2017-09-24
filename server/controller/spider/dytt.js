/**
 * Created by li on 2017/9/22.
 */
const request = require("request-promise");
const cheerio = require("cheerio");
//const mkdirp = require('mkdirp');
const iconv = require('iconv-lite');

/**
 *  newestListUrl 最新电影 
 *  oumeiListUrl 欧美电影 
 *  rihanListUrl 日韩电影 
 *  chinaListUrl 国产电影 
 *  zonheListUrl 综合电影 
 *  decodeType 解析类型gbk
 */
const newestListUrl = "http://www.dytt8.net/html/gndy/dyzz/list_23_";
const oumeiListUrl = "http://www.dytt8.net/html/gndy/oumei/list_7_";
const rihanListUrl = "http://www.dytt8.net/html/gndy/rihan/list_6_";
const chinaListUrl = "http://www.dytt8.net/html/gndy/china/list_4_";
const zonheListUrl = "http://www.dytt8.net/html/gndy/jddy/list_63_";
const decodeType = 'gbk'

class DYTT {
    constructor(buffer) {
        this.buffer = buffer;
        this.domin = 'http://www.dytt8.net';
    }
    getBody() {
        const buffer = this.buffer;
        return iconv.decode(buffer, decodeType)
    }
    get$() {
        const body = this.getBody();
        const $ = cheerio.load(body);
        return $;
    }
    getLists() {
        const $ = this.get$();
        const rawlists = $('.co_content8 table');
        let lists = [];
        rawlists.map((index, list) => {
            const firstRow = $(list).find('tr').eq(1);
            const secondRow = $(list).find('tr').eq(2);
            const thirdRow = $(list).find('tr').eq(3);

            const title = firstRow.find('.ulink:last-child').text();
            const href = firstRow.find('.ulink:last-child').attr('href');
            const info = secondRow.find('font').text();
            const content = thirdRow.find('td').text();
            const link = `${this.domin}${href}`
            lists.push({
                title,
                info,
                content,
                link
            })
        })
        return lists;

    }
    main() {
        return this.getLists()
    }
}



const dytt = async (ctx) => {
    const query = ctx.query;
    const type = query && query.type && query.type.toUpperCase() || '';
    const page = query && query.page || 1;
    let url = '';
    switch (type) {
        case 'NEW':
            url = newestListUrl;
            break;
        case 'OUMEI':
            url = oumeiListUrl;
            break;
        case 'RIHAN':
            url = rihanListUrl;
            break;
        case 'CHINA':
            url = chinaListUrl;
            break;
        case 'ZONHE':
            url = zonheListUrl;
            break;
        default:
            url = newestListUrl;
            break;
    }
    url = `${url}${page}.html`;
    const buffer = await request({ uri: url, encoding: null });
    const list = new DYTT(buffer);
    if (list.main()) {
        ctx.body = {
            success: true,
            data: list.main()
        }
    } else {
        ctx.body = {
            success: false,
            data: "spider error"
        }
    }
};
const detailPage = async (ctx) => {
    const id = ctx.query.id || "";
    ctx.body = {
        success: true,
        data: `detailPage${id}`
    }
}

module.exports = {
    dytt,
    detailPage
};