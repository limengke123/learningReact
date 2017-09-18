/**
 * Created by li on 2017/9/1.
 */
const fs = require('fs');
const request = require("request-promise");
const cheerio = require("cheerio");
const mkdirp = require('mkdirp');
const config = require('../../router/spider/config');
/*const dowload = async (ctx,next)=>{
 const dir = 'images';
 let links = [];
 mkdirp(dir);
 var urls = [];
 let tasks = [];
 let downloadTask = [];
 let url = config.url;
 for(let i = 1; i<= config.size; i++){
 let link = `${url}_${i}.html`;
 if(i==1){
 link = `${url}.html`;
 }
 tasks.push(getResLink(i,link))
 }
 links = await Promise.all(tasks);
 console.log(`links============`,links.length);

 for(let i = 0; i<links.length;i++){
 let item = links[i];
 let index = item.split("___")[0];
 let src = item.split("___")[1];
 downloadTask.push(downloadImg(src,dir,index+links[i].substr(-4,4)));
 }
 await Promise.all(downloadTask);
 };
 async function downloadImg(url,dir,filename){
 console.log(`dowload begin----`,url);
 request.get(url).pipe(fs.createWriteStream(`${dir}/${filename}`)).on("close",function () {
 console.log(`dowload success`,url);
 });

 }
 async function getResLink(index,url) {
 const body = await request(url);
 let urls = [];
 var $ = cheerio.load(body);
 $(config.rule).each(function() {
 var src = $(this).attr('src');
 urls.push(src);
 });
 return `${index}___${urls[0]}`;
 }*/

class Message {
    constructor(body) {
        this.body = body;
        this.getList = this.getList.bind(this);
        this.main = this.main.bind(this);
    }
    getList() {
        const $ = cheerio.load(this.body);
        const rawLists = $(".stream-list").children();
        let lists = [];
        rawLists.map((index,list)=>{
            const _obj = {};
            console.log(list)
            const title = $(list).find('.title a').text();
            const author = $(list).find('.author').children().eq(0).find('span').children().first().text();
            const time = $(list).find('.author').children().eq(0).find('span').children().filter(()=>(this.nodeType===3)).text();
            //const author = $(list).find('.author').children().eq(0).find('span').children().first().text();
            _obj.title = title;
            _obj.author= author;
            _obj.time= time;
            lists.push(_obj)
        });
        return lists;
    };

    main() {
        return this.getList();
    }
}
const segementfaultBlogs = async (ctx) => {
    const {url} = config;
    const body = await request(url);
    const data = new Message(body);
    ctx.body = data.main()
};


module.exports = {
    segementfaultBlogs,
};







