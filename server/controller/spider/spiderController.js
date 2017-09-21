/**
 * Created by li on 2017/9/1.
 */
const request = require("request-promise");
const cheerio = require("cheerio");
const mkdirp = require('mkdirp');

class Message {
    constructor(body) {
        this.body = body;
        this.domain = 'https://segmentfault.com';
        this.getList = this.getList.bind(this);
        this.main = this.main.bind(this);
    }
    getList() {
        const $ = cheerio.load(this.body);
        const rawLists = $(".stream-list__item");
        let lists = [];
        rawLists.map((index,list)=>{
            const title = $(list).find('.title a').text();
            const link = $(list).find('.title a').attr('href');
            const author = $(list).find('.author').children().eq(0).find('span').children().first().text();
            const time = $(list).find('.author').children().eq(0).find('span').text().split("\n")[1].trim();
            const place = $(list).find('.author').children().eq(0).find('span').children().last().text();
            const avatar = $(list).find('.author').find('img').attr('src');
            const excerpt = $(list).find('.excerpt ').text();
            const _obj = {
                title,
                link:`${this.domain}${link}`,
                author,
                time,
                place,
                avatar,
                excerpt,
            };
            lists.push(_obj)
        });
        return lists;
    };

    main() {
        return this.getList();
    }
}
const segementfaultBlogs = async (ctx) => {
    //const {url} = config;
    const query = ctx.query;
    const type = query.type.toUpperCase();
    let url = "";
    switch (type){
        case 'NEWEST':
            url = `https://segmentfault.com/blogs/newest`;
            break;
        case 'HOTTEST':
            url = `https://segmentfault.com/blogs/hottest`;
            break;
        default:
            url = `https://segmentfault.com/blogs`;
            break;
    }
    const page = query.page;
    if(page>1){
        url = `${url}?page=${page}`
    }
    const body = await request(url);
    const html = new Message(body);
    const data = html.main();
    if(data){
        ctx.body = {
            success:true,
            data
        }
    }else{
        ctx.body = {
            success:false,
            data:"spider is not ok"
        }
    }
};

const segementfaultDetailPage = async (ctx)=>{
    const query = ctx.query;
    const id = query.id;
    let url = `https://segmentfault.com/a/${id}`;
    const body = await request(url);
    const $ = cheerio.load(body);
    const article = $(".article").html();
    ctx.body = {
        success:true,
        data:article
    }
};

module.exports = {
    segementfaultBlogs,
    segementfaultDetailPage,
};







