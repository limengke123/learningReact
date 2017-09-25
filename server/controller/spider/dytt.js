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
const domain = 'http://www.dytt8.net';
const newestListUrl = `${domain}/html/gndy/dyzz/list_23_`;
const oumeiListUrl = `${domain}/html/gndy/oumei/list_7_`;
const rihanListUrl = `${domain}/html/gndy/rihan/list_6_`;
const chinaListUrl = `${domain}/html/gndy/china/list_4_`;
const zonheListUrl = `${domain}/html/gndy/jddy/list_63_`;
const decodeType = 'gbk';

class DYTT {
    constructor(buffer) {
        this.buffer = buffer;
        this.domain = domain;
    }

    getBody() {
        const buffer = this.buffer;
        return iconv.decode(buffer, decodeType)
    }

    get$() {
        const body = this.getBody();
        return cheerio.load(body);
    }

    getLists() {
        const $ = this.get$();
        const rawLists = $('.co_content8 table');
        let lists = [];
        rawLists.map((index, list) => {
            const firstRow = $(list).find('tr').eq(1);
            const secondRow = $(list).find('tr').eq(2);
            const thirdRow = $(list).find('tr').eq(3);

            const title = firstRow.find('.ulink:last-child').text();
            const href = firstRow.find('.ulink:last-child').attr('href');
            const info = secondRow.find('font').text();
            const content = thirdRow.find('td').text();
            const link = `${this.domain}${href}`;
            lists.push({
                title,
                info,
                content,
                link
            })
        });
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
    const buffer = await request({uri: url, encoding: null});
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
    const query = ctx.query;
    const link = query && query.link || "";
    if (!link) {
        ctx.body = {
            success: false,
            data: `没有link，做咩啊！`
        }
        return;
    }
    const buffer = await request({uri: link, encoding: null});
    const body = iconv.decode(buffer, decodeType);
    const $ = cheerio.load(body);
    const content = $('body').html()
    ctx.body = {
        success: true,
        data: body
    }
}

module.exports = {
    dytt,
    detailPage
};